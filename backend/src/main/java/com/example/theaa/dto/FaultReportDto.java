package com.example.theaa.dto;

public class FaultReportDto {
    private String vrn;
    private String description;
    private String severity; // ! Could be enum

    // *** GETTERS AND SETTERS ***
    public String getVrn() {
        return vrn;
    }

    public void setVrn(String vrn) {
        this.vrn = vrn;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

}
