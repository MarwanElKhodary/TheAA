package com.example.theaa.enums;

// TODO: Refactor with HealthStatus, very repetitive

public enum FaultSeverity {
    LOW("Low"),
    MEDIUM("Medium"),
    HIGH("High");

    private final String displayName;

    FaultSeverity(String displayName) {
        this.displayName = displayName;
    }

    public static FaultSeverity fromString(String severity) {
        try {
            return valueOf(severity.toUpperCase());
        } catch (IllegalArgumentException | NullPointerException e) {
            return LOW;
        }
    }

    @Override
    public String toString() {
        return displayName;
    }

}