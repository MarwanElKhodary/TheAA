package com.example.theaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.theaa.entity.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

}
