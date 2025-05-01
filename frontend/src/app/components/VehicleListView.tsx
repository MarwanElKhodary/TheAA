"use client";

import { Vehicle } from "@/app/lib/types";
import React, { useState } from "react";
import AddVehicleModal from "@/app/components/AddVehicleModal";
import VehicleRow from "@/app/components/VehicleRow";
import {
	useCreateVehicle,
	useDeactivateVehicle,
	useVehicles,
} from "@/app/hooks/api";

export default function VehicleListView() {
	const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(
		null
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data: vehicles, isLoading, isError, error } = useVehicles();

	const { mutate: deactivateVehicle } = useDeactivateVehicle({
		onSuccess: () => {
			setSelectedVehicleId(null);
		},
	});

	const handleDeactivateVehicle = (id: number) => {
		if (!id) return;
		setSelectedVehicleId(id);
		deactivateVehicle(id);
	};

	const { mutate: createVehicle } = useCreateVehicle({
		onSuccess: () => {
			setIsModalOpen(false);
		},
	});

	const handleAddVehicle = async (vehicleData: Vehicle) => {
		createVehicle(vehicleData);
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
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Vehicle List View</h1>
				<div
					onClick={() => setIsModalOpen(true)}
					className="[background-color:var(--brand-yellow)] hover:bg-yellow-300 text-black px-4 py-2 rounded shadow cursor-pointer">
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
								<VehicleRow
									key={vehicle.id}
									vehicle={vehicle}
									onDeactivate={handleDeactivateVehicle}
									selectedVehicleId={selectedVehicleId}
								/>
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
