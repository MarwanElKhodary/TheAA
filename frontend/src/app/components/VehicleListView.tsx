"use client";

import { Vehicle, HealthStatus } from "@/app/lib/types";
import { useState } from "react";
import { deactivateVehicle, createVehicle } from "@/app/lib/api";
import AddVehicleModal from "@/app/components/AddVehicleModal";
import { useVehicles } from "../hooks/api-hooks";

// TODO: Implement View Vehicle
// ? Should colours be all over the place like this?
// ? Should each component be its own row?
// ? Should numFaults be calculated in the backend or front end? Probably backend

export default function VehicleListView() {
	const [isDeactivating, setIsDeactivating] = useState(false);
	const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
		null
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data: vehicles, isLoading, isError, error, refetch } = useVehicles();

	// TODO: Refactor to use hooks
	const handleDeactivateVehicle = async (id: number) => {
		if (!id) return;

		try {
			setIsDeactivating(true);
			setSelectedVehicleId(id);
			await deactivateVehicle(id);
			// Refetch the vehicles list after deactivation
			refetch();
		} catch (error) {
			console.error("Error deactivating vehicle:", error);
		} finally {
			setIsDeactivating(false);
			setSelectedVehicleId(null);
		}
	};

	// TODO: Refactor to use hooks
	const handleAddVehicle = async (vehicleData: Vehicle) => {
		await createVehicle(vehicleData);
		refetch();
	};

	const getHealthStatusColor = (status: HealthStatus): string => {
		switch (status) {
			// ! Use types/interfaces so it's not hardcoded
			case "Up to Date":
				return "bg-green-100 text-green-800";
			case "Action Soon":
				return "bg-yellow-100 text-yellow-800";
			case "Action Now":
				return "bg-orange-100 text-orange-800";
			case "Off the Road":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
				<p>
					Error loading vehicles:{" "}
					{error instanceof Error ? error.message : "Unknown error"}
				</p>
				<button
					onClick={() => refetch()}
					className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
					Try Again
				</button>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Vehicle List View</h1>
				{/* TODO: Should probably be its own component too */}
				<div
					onClick={() => setIsModalOpen(true)}
					className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow cursor-pointer">
					Add New Vehicle
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								VRN
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Model
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Health Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Number of Faults
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{vehicles && vehicles.length > 0 ? (
							vehicles.map((vehicle: Vehicle) => (
								<tr key={vehicle.id}>
									<td className="px-6 py-4 whitespace-nowrap">{vehicle.vrn}</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{vehicle.model}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{/* TODO: This should be a component too */}
										{/* TODO: Check if "as blah" is normal */}
										<span
											className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHealthStatusColor(vehicle.healthStatus as HealthStatus)}`}>
											{vehicle.healthStatus}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{vehicle.faults ? vehicle.faults.length : 0}
									</td>
									<td className="px-6 py-4 whitespace-nowrap flex space-x-4">
										<button className="text-blue-600 hover:text-blue-900 cursor-pointer">
											View Details
										</button>
										<button
											onClick={() =>
												vehicle.id && handleDeactivateVehicle(vehicle.id)
											}
											disabled={
												isDeactivating && selectedVehicleId === vehicle.id
											}
											className={`text-yellow-600 hover:text-yellow-900 ${
												isDeactivating && selectedVehicleId === vehicle.id
													? "opacity-50 cursor-not-allowed"
													: "cursor-pointer"
											}`}>
											{isDeactivating && selectedVehicleId === vehicle.id
												? "Deactivating..."
												: "Deactivate Vehicle"}
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={5} className="px-6 py-4 text-center text-gray-500">
									No vehicles found
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<AddVehicleModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleAddVehicle}
			/>
		</div>
	);
}
