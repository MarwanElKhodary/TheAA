package com.example.theaa.enums;

public enum HealthStatus {
    UP_TO_DATE("Up to Date"),
    ACTION_SOON("Action Soon"),
    ACTION_NOW("Action Now"),
    OFF_THE_ROAD("Off the Road");

    private final String displayName;

    HealthStatus(String displayName) {
        this.displayName = displayName;
    }

    @Override
    public String toString() {
        return displayName;
    }
}
