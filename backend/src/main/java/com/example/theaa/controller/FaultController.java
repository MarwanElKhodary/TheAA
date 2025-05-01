package com.example.theaa.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.theaa.dto.FaultReportDto;
import com.example.theaa.entity.Fault;
import com.example.theaa.entity.Vehicle;
import com.example.theaa.enums.FaultSeverity;
import com.example.theaa.service.FaultService;
import com.example.theaa.service.VehicleService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
public class FaultController {

    private final FaultService faultService;
    private final VehicleService vehicleService;

    public FaultController(FaultService faultService, VehicleService vehicleService) {
        this.faultService = faultService;
        this.vehicleService = vehicleService;
    }

    // ? What are response entities?
    // ? Are response status needed if it's in the body? In case we want to throw
    // TODO: Rework this whole method to be in service class - if that makes sense
    // created or an error
    @PostMapping("/faults")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Vehicle> reportFault(@RequestBody FaultReportDto report) {
        // TODO: Think over error handling
        if (report.getVrn() == null || report.getVrn().trim().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // TODO: Refactor this line, to use 404 error
        Vehicle vehicle = vehicleService.getVehicleByVrn(report.getVrn()).orElse(new Vehicle("", ""));
        Fault fault = new Fault(report.getDescription(), FaultSeverity.fromString(report.getSeverity()));

        vehicle.getFaults().add(fault);
        faultService.reportFault(fault);

        return new ResponseEntity<>(vehicleService.updateVehicleHealthStatus(vehicle), HttpStatus.CREATED);
    }

}
