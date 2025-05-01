package com.example.theaa.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.theaa.dto.FaultReportDto;
import com.example.theaa.entity.Vehicle;
import com.example.theaa.service.FaultService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class FaultController {

    private final FaultService faultService;

    public FaultController(FaultService faultService) {
        this.faultService = faultService;
    }

    @PostMapping("/faults")
    public ResponseEntity<Vehicle> reportFault(@RequestBody FaultReportDto report) {
        if (report.getVrn() == null || report.getVrn().trim().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            Vehicle updatedVehicle = faultService.processNewFault(report);
            return new ResponseEntity<>(updatedVehicle, HttpStatus.CREATED);

        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
