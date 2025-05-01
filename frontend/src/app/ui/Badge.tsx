import { FaultSeverity, HealthStatus } from "@/app/lib/types";

type BadgeType = "health" | "fault";

interface BadgeProps {
	type: BadgeType;
	value: HealthStatus | FaultSeverity;
}

export default function Badge({ type, value }: BadgeProps) {
	const getColorClassNames = (): string => {
		if (type === "health") {
			const status = value as HealthStatus;
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
		} else {
			const severity = value as FaultSeverity;
			switch (severity) {
				case FaultSeverity.HIGH:
					return "bg-red-100 text-red-800";
				case FaultSeverity.MEDIUM:
					return "bg-yellow-100 text-yellow-800";
				case FaultSeverity.LOW:
					return "bg-green-100 text-green-800";
				default:
					return "bg-gray-100 text-gray-800";
			}
		}
	};

	return (
		<span
			className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getColorClassNames()}`}>
			{value}
		</span>
	);
}
