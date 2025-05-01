package com.example.theaa.entity;

import java.util.HashSet;
import java.util.Set;

import com.example.theaa.enums.FaultSeverity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

    @Enumerated(EnumType.STRING)
    private FaultSeverity severity;

    @ManyToMany(mappedBy = "faults")
    private Set<Vehicle> vehicles = new HashSet<>();

    // *** CONSTRUCTORS ***

    // JPA requires a no-args constructor to create entities when loading from the
    // database
    protected Fault() {
    }

    // TODO: Needs a timestamp of when it happens
    // TODO: On the views of the faults, need to organize by time of when it happens
    public Fault(String description, FaultSeverity severity) {
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

    public FaultSeverity getSeverity() {
        return severity;
    }

}
