import { useState } from "react";
import { Vehicle } from "@/app/lib/types";

interface AddVehicleModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (vehicleData: Vehicle) => Promise<void>;
}

export default function AddVehicleModal({
	isOpen,
	onClose,
	onSubmit,
}: AddVehicleModalProps) {
	const [vrn, setVrn] = useState("");
	const [model, setModel] = useState("");
	const [error, setError] = useState("");

	const handleClose = () => {
		setVrn("");
		setModel("");
		setError("");
		onClose();
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!vrn.trim()) {
			setError("VRN is required");
			return;
		}

		if (!model.trim()) {
			setError("Model is required");
			return;
		}

		try {
			setError("");

			await onSubmit({
				vrn: vrn.trim(),
				model: model.trim(),
			});

			handleClose();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to add vehicle");
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-800/50 bg-opacity-5 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-md">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">Add New Vehicle</h2>
					<button
						onClick={handleClose}
						className="text-gray-500 hover:text-gray-700 cursor-pointer">
						✕
					</button>
				</div>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="vrn"
							className="block text-gray-700 font-medium mb-2">
							Vehicle Registration Number (VRN)
						</label>
						<input
							type="text"
							id="vrn"
							value={vrn}
							onChange={(e) => setVrn(e.target.value)}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
							placeholder="e.g. AB12 CDE"
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="model"
							className="block text-gray-700 font-medium mb-2">
							Vehicle Model
						</label>
						<input
							type="text"
							id="model"
							value={model}
							onChange={(e) => setModel(e.target.value)}
							className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
							placeholder="e.g. Toyota Corolla"
							required
						/>
					</div>

					<div className="flex justify-end space-x-3">
						<button
							type="button"
							onClick={handleClose}
							className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 cursor-pointer">
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 [background-color:var(--brand-yellow)] hover:bg-yellow-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 disabled:opacity-50 cursor-pointer disabled:cursor-progress">
							Add Vehicle
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
