import { testVehicles } from "@/app/lib/placeholder-data";
import { Vehicle, HealthStatus } from "@/app/lib/types";

// TODO: Display number of faults as a column
// TODO: Implement Add New Vehicle
// TODO: Implement View Vehicle
// TODO: Implement Deactivate Vehicle
// ? Should colours be all over the place like this?
// ? Should each component be its own row?
// ? Should numFaults be calculated in the backend or front end? Probably backend

export default function VehicleListView() {
	const vehicles: Vehicle[] = testVehicles;

	const getHealthStatusColor = (status: HealthStatus): string => {
		switch (status) {
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

	return (
		<div className="space-y-8">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Vehicle List View</h1>
				{/* TODO: Should probably be its own component too */}
				<div
					// href="/vehicles/new"
					className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow">
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
						{vehicles &&
							vehicles.map((vehicle) => (
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
									<td className="px-6 py-4 whitespace-nowrap">
										<div
											// href={`/vehicles/${vehicle.id}`}
											className="text-blue-600 hover:text-blue-900 mr-4">
											View Details
										</div>
										<div
											// href={`/faults/new?vrn=${vehicle.vrn}`}
											className="text-yellow-600 hover:text-yellow-900">
											Deactivate Vehicle
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
