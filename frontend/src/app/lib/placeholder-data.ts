import { FaultSeverity, HealthStatus, Vehicle } from "@/app/lib/types";

// ? Should this be a type/interface?
export const testVehicles: Vehicle[] = [
	{
		id: 1,
		model: "Toyota Corolla",
		vrn: "AB12 CDE",
		healthStatus: "Action Soon" as HealthStatus,
		faults: [
			{
				id: 1,
				description: "Flat tire",
				severity: "Low" as FaultSeverity,
			},
			{
				id: 4,
				description: "Battery drain",
				severity: "Medium" as FaultSeverity,
			},
		],
	},
	{
		id: 2,
		model: "Ford Focus",
		vrn: "XY34 ZAB",
		healthStatus: "Up to Date" as HealthStatus,
		faults: [],
	},
	{
		id: 3,
		model: "Volkswagen Golf",
		vrn: "CD56 EFG",
		healthStatus: "Action Now" as HealthStatus,
		faults: [
			{
				id: 2,
				description: "Engine overheating",
				severity: "High" as FaultSeverity,
			},
		],
	},
	{
		id: 4,
		model: "Honda Civic",
		vrn: "HI78 JKL",
		healthStatus: "Up to Date" as HealthStatus,
		faults: [],
	},
	{
		id: 5,
		model: "BMW 3 Series",
		vrn: "MN90 OPQ",
		healthStatus: "Off the Road" as HealthStatus,
		faults: [
			{
				id: 5,
				description: "Oil leak",
				severity: "Medium" as FaultSeverity,
			},
			{
				id: 3,
				description: "Brake failure",
				severity: "High" as FaultSeverity,
			},
			{
				id: 6,
				description: "Transmission issues",
				severity: "High" as FaultSeverity,
			},
		],
	},
	{
		id: 6,
		model: "Toyota Corolla",
		vrn: "AB12 CDE",
		healthStatus: "Action Soon" as HealthStatus,
		faults: [
			{
				id: 1,
				description: "Flat tire",
				severity: "Low" as FaultSeverity,
			},
			{
				id: 4,
				description: "Battery drain",
				severity: "Medium" as FaultSeverity,
			},
		],
	},
	{
		id: 7,
		model: "Ford Focus",
		vrn: "XY34 ZAB",
		healthStatus: "Up to Date" as HealthStatus,
		faults: [],
	},
	{
		id: 8,
		model: "Volkswagen Golf",
		vrn: "CD56 EFG",
		healthStatus: "Action Now" as HealthStatus,
		faults: [
			{
				id: 2,
				description: "Engine overheating",
				severity: "High" as FaultSeverity,
			},
		],
	},
	{
		id: 9,
		model: "Honda Civic",
		vrn: "HI78 JKL",
		healthStatus: "Up to Date" as HealthStatus,
		faults: [],
	},
	{
		id: 10,
		model: "BMW 3 Series",
		vrn: "MN90 OPQ",
		healthStatus: "Off the Road" as HealthStatus,
		faults: [
			{
				id: 5,
				description: "Oil leak",
				severity: "Medium" as FaultSeverity,
			},
			{
				id: 3,
				description: "Brake failure",
				severity: "High" as FaultSeverity,
			},
			{
				id: 6,
				description: "Transmission issues",
				severity: "High" as FaultSeverity,
			},
		],
	},
];
