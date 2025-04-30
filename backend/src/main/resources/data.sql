-- Insert sample vehicles with health status
INSERT INTO vehicle (id, model, vrn, health_status) VALUES (1, 'Toyota Corolla', 'AB12 CDE', 'ACTION_SOON');
INSERT INTO vehicle (id, model, vrn, health_status) VALUES (2, 'Ford Focus', 'XY34 ZAB', 'UP_TO_DATE');
INSERT INTO vehicle (id, model, vrn, health_status) VALUES (3, 'Volkswagen Golf', 'CD56 EFG', 'ACTION_NOW');
INSERT INTO vehicle (id, model, vrn, health_status) VALUES (4, 'Honda Civic', 'HI78 JKL', 'UP_TO_DATE');
INSERT INTO vehicle (id, model, vrn, health_status) VALUES (5, 'BMW 3 Series', 'MN90 OPQ', 'OFF_THE_ROAD');

-- Reset ID sequence after direct ID inserts
-- Due to @GeneratedValue, the db is responsible for auto generating the next ID value
-- If this line is not added, the db might start with id 1, which has already been inserted
ALTER TABLE vehicle ALTER COLUMN id RESTART WITH 6;

-- Insert sample faults with enum-based severity
INSERT INTO fault (id, description, severity) VALUES (1, 'Flat tire', 'LOW');
INSERT INTO fault (id, description, severity) VALUES (2, 'Engine overheating', 'HIGH');
INSERT INTO fault (id, description, severity) VALUES (3, 'Brake failure', 'HIGH');
INSERT INTO fault (id, description, severity) VALUES (4, 'Battery drain', 'MEDIUM');
INSERT INTO fault (id, description, severity) VALUES (5, 'Oil leak', 'MEDIUM');
INSERT INTO fault (id, description, severity) VALUES (6, 'Transmission issues', 'HIGH');

-- Reset ID sequence after direct ID inserts
ALTER TABLE fault ALTER COLUMN id RESTART WITH 7;

-- Associate faults with vehicles (3 vehicles with faults)
-- Vehicle 1 (Toyota Corolla) with flat tire and battery drain
-- This will result in "ACTION_SOON" status (has MEDIUM severity fault)
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (1, 1);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (1, 4);

-- Vehicle 3 (Volkswagen Golf) with engine overheating
-- This will result in "ACTION_NOW" status (has HIGH severity fault)
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (3, 2);

-- Vehicle 5 (BMW 3 Series) with brake failure, oil leak and transmission issues
-- This will result in "OFF_THE_ROAD" status (has 3+ HIGH severity faults)
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 3);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 5);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 6);
