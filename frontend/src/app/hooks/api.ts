import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Vehicle } from "../lib/types";

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

const useCreateVehicle = ({
	onSuccess,
	onError,
}: {
	onSuccess?: (data: Vehicle) => void;
	onError?: (error: Error) => void;
} = {}) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (vehicleData: Vehicle) => {
			const response = await fetch(`${API_BASE_URL}/vehicles`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(vehicleData),
			});

			if (!response.ok) {
				throw new Error(`Failed to create vehicle: ${response.status}`);
			}

			return response.json();
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["vehicles"] });
			onSuccess?.(data);
		},
		onError: (error) => {
			onError?.(error as Error);
		},
	});
};

const useDeactivateVehicle = ({
	onSuccess,
	onError,
}: {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
} = {}) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			const response = await fetch(`${API_BASE_URL}/vehicles/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error(`Failed to deactivate vehicle: ${response.status}`);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["vehicles"] });
			onSuccess?.();
		},
		onError: (error) => {
			onError?.(error as Error);
		},
	});
};

export { useVehicles, useCreateVehicle, useDeactivateVehicle };
