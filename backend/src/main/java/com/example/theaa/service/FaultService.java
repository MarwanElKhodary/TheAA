package com.example.theaa.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.theaa.component.FaultQueue;
import com.example.theaa.dto.FaultReportDto;
import com.example.theaa.entity.Fault;
import com.example.theaa.entity.Vehicle;
import com.example.theaa.enums.FaultSeverity;
import com.example.theaa.repository.FaultRepository;

@Service
public class FaultService {
    private final FaultRepository faultRepository;
    private final FaultQueue faultQueue;
    private final VehicleService vehicleService;

    public FaultService(FaultRepository faultRepository, FaultQueue faultQueue, VehicleService vehicleService) {
        this.faultRepository = faultRepository;
        this.faultQueue = faultQueue;
        this.vehicleService = vehicleService;
    }

    public Vehicle processNewFault(FaultReportDto report) {
        Optional<Vehicle> vehicleOptional = vehicleService.getVehicleByVrn(report.getVrn());
        if (vehicleOptional.isEmpty()) {
            throw new IllegalArgumentException("Vehicle not found with VRN: " + report.getVrn());
        }

        Vehicle vehicle = vehicleOptional.get();
        Fault fault = new Fault(report.getDescription(), FaultSeverity.fromString(report.getSeverity()));
        vehicle.getFaults().add(fault);

        reportFault(fault);
        return vehicleService.updateVehicleHealthStatus(vehicle);
    }

    public void reportFault(Fault fault) {
        faultQueue.enqueue(fault);
        processNextFault();
    }

    public void processNextFault() {
        Fault fault = faultQueue.dequeue();
        if (fault != null) {
            faultRepository.save(fault);
        }
    }
}
