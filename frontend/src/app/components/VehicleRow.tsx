import React, { useState } from "react";
import { Vehicle } from "@/app/lib/types";
import VehicleDetails from "@/app/components/VehicleDetails";
import Badge from "@/app/ui/Badge";

interface VehicleRowProps {
	vehicle: Vehicle;
	onDeactivate: (id: number) => void;
	selectedVehicleId: number | null;
}

export default function VehicleRow({ vehicle, onDeactivate }: VehicleRowProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleDetails = () => {
		if (vehicle.id) {
			setIsExpanded(!isExpanded);
		}
	};

	const handleDeactivate = () => {
		if (vehicle.id) {
			onDeactivate(vehicle.id);
		}
	};

	return (
		<React.Fragment>
			<tr>
				<td className="px-6 py-4 whitespace-nowrap">{vehicle.vrn}</td>
				<td className="px-6 py-4 whitespace-nowrap">{vehicle.model}</td>
				<td className="px-6 py-4 whitespace-nowrap">
					{vehicle.healthStatus && (
						<Badge type="health" value={vehicle.healthStatus} />
					)}
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					{vehicle.faults ? vehicle.faults.length : 0}
				</td>
				<td className="px-6 py-4 whitespace-nowrap flex space-x-4">
					<button
						onClick={toggleDetails}
						className="text-blue-600 hover:text-blue-900 cursor-pointer">
						{isExpanded ? "Hide Details" : "View Details"}
					</button>
					<button
						onClick={handleDeactivate}
						className="text-yellow-600 hover:text-yellow-900 cursor-pointer">
						Deactivate Vehicle
					</button>
				</td>
			</tr>
			{vehicle.faults && vehicle.id && (
				<VehicleDetails faults={vehicle.faults} isExpanded={isExpanded} />
			)}
		</React.Fragment>
	);
}
