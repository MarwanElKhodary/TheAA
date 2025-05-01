import { HealthStatus } from "@/app/lib/types";

interface HealthStatusBadgeProps {
	status: HealthStatus;
}

export default function HealthStatusBadge({ status }: HealthStatusBadgeProps) {
	const getHealthStatusColor = (status: HealthStatus): string => {
		switch (status) {
			case HealthStatus.UP_TO_DATE:
				return "bg-green-100 text-green-800";
			case HealthStatus.ACTION_SOON:
				return "bg-yellow-100 text-yellow-800";
			case HealthStatus.ACTION_NOW:
				return "bg-orange-100 text-orange-800";
			case HealthStatus.OFF_THE_ROAD:
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<span
			className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHealthStatusColor(status)}`}>
			{status}
		</span>
	);
}
