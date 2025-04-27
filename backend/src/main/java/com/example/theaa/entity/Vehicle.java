package com.example.theaa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // ? Or should it be IDENTITY?
    private Long id;
    private String model;
    private String vrn;

    protected Vehicle() {
    } // ? Not sure what this does, apparently "exists only for the sake of JPA"

    public Vehicle(String model, String vrn) {
        this.model = model;
        this.vrn = vrn;
    }

    @Override
    public String toString() {
        return String.format("Vehicle[id=%id, model='%s', lastName='%s']", id, model, vrn);
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
