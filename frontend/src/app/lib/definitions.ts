export type HealthStatus =
	| "Up to Date"
	| "Action Soon"
	| "Action Now"
	| "Off the Road";

export type FaultSeverity = "Low" | "Medium" | "High";

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
	vehicles?: Vehicle[];
}

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
