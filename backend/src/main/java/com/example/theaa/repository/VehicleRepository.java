package com.example.theaa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.theaa.entity.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    Optional<Vehicle> findByVrn(String vrn);
}
