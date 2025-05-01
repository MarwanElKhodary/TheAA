// import { Vehicle } from "@/app/lib/types";

//TODO: Refactor into hooks and eventually remove

const API_BASE_URL = "http://localhost:8080";

// export async function createVehicle(vehicleData: Vehicle): Promise<Vehicle> {
// 	const response = await fetch(`${API_BASE_URL}/vehicles`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(vehicleData),
// 	});

// 	if (!response.ok) {
// 		throw new Error(`Failed to create vehicle: ${response.status}`);
// 	}

// 	return response.json();
// }

export async function deactivateVehicle(id: number): Promise<void> {
	const response = await fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: "DELETE",
	});

	if (!response.ok) {
		throw new Error(`Failed to deactivate vehicle: ${response.status}`);
	}
}
