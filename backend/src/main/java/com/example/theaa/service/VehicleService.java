package com.example.theaa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.theaa.entity.Vehicle;
import com.example.theaa.repository.VehicleRepository;

// ! Need to check if all these methods are needed after the controller class
@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository; // ? What does this do?

    @Autowired // ? What does this do?
    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    public Optional<Vehicle> getVehicleByVrn(String vrn) {
        return vehicleRepository.findByVrn(vrn);
    }

    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}
