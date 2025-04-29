package com.example.theaa.entity;

import java.util.HashSet;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Fault {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private String severity; // ? Could be an enum
    // Could add code, detectedAt, lastSeen, status

    @ManyToMany(mappedBy = "faults")
    HashSet<Vehicle> vehicles = new HashSet<Vehicle>();

    // *** CONSTRUCTORS ***

    // JPA requires a no-args constructor to create entities when loading from the
    // database
    protected Fault() {
    }

    public Fault(String description, String severity) {
        this.description = description;
        this.severity = severity;
    }

    // *** GETTERS AND SETTERS ***

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getSeverity() {
        return severity;
    }

}
