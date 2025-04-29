package com.example.theaa.entity;

import java.util.HashSet;
import java.util.Set;

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

    // ? Need to read more about this:
    // https://stackoverflow.com/questions/76955457/can-not-set-java-util-hashset-field-to-org-hibernate-collection-spi-persistentse
    @ManyToMany
    @JoinTable(name = "vehicle_fault", joinColumns = @JoinColumn(name = "vehicle_id"), inverseJoinColumns = @JoinColumn(name = "fault_id"))
    private Set<Fault> faults = new HashSet<>();

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

    public Set<Fault> getFaults() {
        return faults;
    }

    // *** METHODS ***

    @Override
    public String toString() {
        return String.format("Vehicle[id=%d, model='%s', lastName='%s']", id, model, vrn);
    }
}
