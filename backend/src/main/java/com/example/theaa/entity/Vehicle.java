package com.example.theaa.entity;

import java.util.HashSet;
import java.util.Set;

import com.example.theaa.enums.FaultSeverity;
import com.example.theaa.enums.HealthStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String vrn;

    @Enumerated(EnumType.STRING)
    private HealthStatus healthStatus;

    @ManyToMany
    @JoinTable(name = "vehicle_fault", joinColumns = @JoinColumn(name = "vehicle_id"), inverseJoinColumns = @JoinColumn(name = "fault_id"))
    private Set<Fault> faults = new HashSet<>();

    // *** CONSTRUCTORS ***

    protected Vehicle() {
        this.healthStatus = HealthStatus.UP_TO_DATE;
    }

    public Vehicle(String model, String vrn) {
        this.model = model;
        this.vrn = vrn;
    }

    // *** GETTERS AND SETTERS ***

    public Long getId() {
        return id;
    }

    public String getModel() {
        return model;
    }

    public String getVrn() {
        return vrn;
    }

    public Set<Fault> getFaults() {
        return faults;
    }

    public String getHealthStatus() {
        return healthStatus.toString();
    }

    // *** METHODS ***

    public void updateHealthStatus() {
        if (faults.isEmpty()) {
            this.healthStatus = HealthStatus.UP_TO_DATE;
            return;
        }

        int highCount = 0;
        int mediumCount = 0;

        for (Fault fault : faults) {
            if (fault.getSeverity() == FaultSeverity.HIGH) {
                highCount++;
            } else if (fault.getSeverity() == FaultSeverity.MEDIUM) {
                mediumCount++;
            }
        }

        // TODO: Replace magic numbers
        if (highCount >= 3) {
            this.healthStatus = HealthStatus.OFF_THE_ROAD;
        } else if (highCount > 0) {
            this.healthStatus = HealthStatus.ACTION_NOW;
        } else if (mediumCount > 0) {
            this.healthStatus = HealthStatus.ACTION_SOON;
        } else {
            this.healthStatus = HealthStatus.UP_TO_DATE;
        }
    }
}
