package com.example.theaa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.theaa.entity.Vehicle;
import com.example.theaa.repository.VehicleRepository;

@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public void deactivateVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    public Optional<Vehicle> getVehicleByVrn(String vrn) {
        return vehicleRepository.findByVrn(vrn);
    }

    // ? You can't pass this instance in the parameter?
    // TODO: Read and check if .save can be used to update like this
    // https://stackoverflow.com/questions/11881479/how-do-i-update-an-entity-using-spring-data-jpa
    public Vehicle updateVehicleHealthStatus(Vehicle vehicle) {
        vehicle.updateHealthStatus();
        return vehicleRepository.save(vehicle);
    }

}
