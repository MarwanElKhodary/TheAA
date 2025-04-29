package com.example.theaa.entity;

import java.util.HashSet;

import jakarta.persistence.Entity;
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

    @ManyToMany
    @JoinTable(name = "vehicle_fault", joinColumns = @JoinColumn(name = "vehicle_id"), inverseJoinColumns = @JoinColumn(name = "fault_id"))
    HashSet<Fault> faults = new HashSet<Fault>();

    // *** CONSTRUCTORS ***

    // JPA requires a no-args constructor to create entities when loading from the
    // database
    protected Vehicle() {
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

    public HashSet<Fault> getFaults() {
        return faults;
    }

    // *** METHODS ***

    @Override
    public String toString() {
        return String.format("Vehicle[id=%d, model='%s', lastName='%s']", id, model, vrn);
    }
}
