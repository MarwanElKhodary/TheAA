import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "http://localhost:8080";

const useVehicles = () => {
	return useQuery({
		queryKey: ["vehicles"],
		queryFn: async () => {
			const response = await fetch(`${API_BASE_URL}/vehicles`);

			if (!response.ok) {
				throw new Error(`Failed to get vehicles: ${response.status}`);
			}

			return response.json();
		},
	});
};

export { useVehicles };
