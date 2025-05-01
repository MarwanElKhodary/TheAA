export enum HealthStatus {
	UP_TO_DATE = "Up to Date",
	ACTION_SOON = "Action Soon",
	ACTION_NOW = "Action Now",
	OFF_THE_ROAD = "Off the Road",
}

export enum FaultSeverity {
	LOW = "LOW",
	MEDIUM = "MEDIUM",
	HIGH = "HIGH",
}

export interface Vehicle {
	id?: number;
	model: string;
	vrn: string;
	healthStatus?: HealthStatus;
	faults?: Fault[];
}

//TODO: Rework once dateOccurred is added
export interface Fault {
	id?: number;
	description: string;
	severity: FaultSeverity;
}
