package com.example.theaa.entity;

import java.util.HashSet;
import java.util.Set;

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

    // ? Need to read more about this:
    // https://stackoverflow.com/questions/76955457/can-not-set-java-util-hashset-field-to-org-hibernate-collection-spi-persistentse
    @ManyToMany(mappedBy = "faults")
    private Set<Vehicle> vehicles = new HashSet<>();

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
