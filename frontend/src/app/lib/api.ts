import { Vehicle } from "@/app/lib/types";

const API_BASE_URL = "http://localhost:8080";

export async function getVehicles(): Promise<Vehicle[]> {
	const response = await fetch(`${API_BASE_URL}/vehicles`);

	if (!response.ok) {
		throw new Error(`Failed to get vehicles: ${response.status}`);
	}

	return response.json();
}

export async function getVehicleById(id: number): Promise<Vehicle> {
	const response = await fetch(`${API_BASE_URL}/vehicles/${id}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch vehicle: ${response.status}`);
	}

	return response.json();
}

// ! What the hell is Omit
export async function createVehicle(
	vehicleData: Omit<Vehicle, "id">
): Promise<Vehicle> {
	const response = await fetch(`${API_BASE_URL}/vehicles`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(vehicleData),
	});

	if (!response.ok) {
		throw new Error(`Failed to create vehicle: ${response.status}`);
	}

	return response.json();
}

export async function deactivateVehicle(id: number): Promise<void> {
	const response = await fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		throw new Error(`Failed to deactivate vehicle: ${response.status}`);
	}
}
