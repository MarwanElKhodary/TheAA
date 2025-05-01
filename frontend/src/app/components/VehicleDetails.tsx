import { Fault } from "@/app/lib/types";
import FaultSeverityBadge from "@/app/components/FaultSeverityBadge";

interface VehicleDetailsProps {
	faults: Fault[];
	isExpanded: boolean;
}

//TODO: Rework when timeOccurred is implemented in the backend

export default function VehicleDetails({
	faults,
	isExpanded,
}: VehicleDetailsProps) {
	if (!isExpanded) return null;

	return (
		<tr>
			<td colSpan={5} className="bg-gray-50 px-6 py-4">
				<div className="rounded-lg border border-gray-200 overflow-hidden">
					<div className="px-4 py-3 bg-gray-100 border-b border-gray-200 font-medium">
						Vehicle Faults
					</div>
					{faults.length > 0 ? (
						<div className="divide-y divide-gray-200">
							{faults.map((fault) => (
								<div key={fault.id} className="px-4 py-3 flex justify-between">
									<div className="flex-1">{fault.description}</div>
									<div>
										<FaultSeverityBadge severity={fault.severity} />
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="px-4 py-3 text-gray-500">
							No faults found for this vehicle
						</div>
					)}
				</div>
			</td>
		</tr>
	);
}
