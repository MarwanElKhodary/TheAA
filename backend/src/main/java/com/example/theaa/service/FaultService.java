package com.example.theaa.service;

import org.springframework.stereotype.Service;

import com.example.theaa.component.FaultQueue;
import com.example.theaa.entity.Fault;
import com.example.theaa.repository.FaultRepository;

@Service
public class FaultService {
    private final FaultRepository faultRepository;
    private final FaultQueue faultQueue;

    public FaultService(FaultRepository faultRepository, FaultQueue faultQueue) {
        this.faultRepository = faultRepository;
        this.faultQueue = faultQueue;
    }

    public void reportFault(Fault fault) {
        faultQueue.enqueue(fault);
        processNextFault();
    }

    public void processNextFault() {
        // ? Should this type be optional? Could return null
        Fault fault = faultQueue.dequeue();
        if (fault != null) {
            faultRepository.save(fault);
        }
    }

    // TODO: removeFault
    // TODO: getFaultsByCar? or by VRN?

    // public Fault saveFault(Fault fault) {
    // return faultRepository.save(fault);
    // }

    // public List<Fault> getFaultsByVehicle(Vehicle vehicle) {
    // return faultRepository.findAllByVehiclesContaining(vehicle);
    // }

    // public Optional<Fault> getFaultById(Long id) {
    // return faultRepository.findById(id);
    // }
}
