import { FaultSeverity } from "@/app/lib/types";

interface FaultSeverityBadgeProps {
	severity: FaultSeverity;
}

export default function FaultSeverityBadge({
	severity,
}: FaultSeverityBadgeProps) {
	const getSeverityColor = (severity: FaultSeverity): string => {
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
	};

	return (
		<span
			className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(severity)}`}>
			{severity}
		</span>
	);
}
