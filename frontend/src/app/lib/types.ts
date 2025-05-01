// TODO: Investigate what's option and what's not later
// ? Look into types, schemas and interfaces and see how you can separate this out
export type HealthStatus =
	| "Up to Date"
	| "Action Soon"
	| "Action Now"
	| "Off the Road";

export type FaultSeverity = "LOW" | "MEDIUM" | "HIGH";

// ? What's the difference between types and interfaces?
export interface Vehicle {
	id?: number;
	model: string;
	vrn: string;
	healthStatus?: HealthStatus;
	faults?: Fault[];
}

export interface Fault {
	id?: number;
	description: string;
	severity: FaultSeverity;
	vehicles?: Vehicle[]; // ! Delete this it might not make sense
}

// ! This hasn't been used yet, probably remove
export interface FaultReportDto {
	vrn: string;
	description: string;
	severity: string;
}

// // API response types
// export interface ApiResponse<T> {
//   data?: T;
//   error?: string;
// }
