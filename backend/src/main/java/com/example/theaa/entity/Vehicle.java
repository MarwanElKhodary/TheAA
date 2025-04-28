package com.example.theaa.entity;

// import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String vrn;
    // TODO: Implement
    // private List<Part> parts;

    // JPA requires a no-args constructor to create entities when loading from the
    // database
    protected Vehicle() {
    }

    public Vehicle(String model, String vrn) {
        this.model = model;
        this.vrn = vrn;
    }

    @Override
    public String toString() {
        return String.format("Vehicle[id=%d, model='%s', lastName='%s']", id, model, vrn);
    }

    public Long getId() {
        return id;
    }

    public String getModel() {
        return model;
    }

    public String getVrn() {
        return vrn;
    }
}
