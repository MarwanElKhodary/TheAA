package com.example.theaa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.theaa.entity.Vehicle;
import com.example.theaa.service.VehicleService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @PostMapping("/vehicles")
    @ResponseStatus(HttpStatus.CREATED)
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.createVehicle(vehicle);
    }

}
