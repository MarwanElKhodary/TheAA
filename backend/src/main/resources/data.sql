-- Insert sample vehicles
INSERT INTO vehicle (id, model, vrn) VALUES (1, 'Toyota Corolla', 'AB12 CDE');
INSERT INTO vehicle (id, model, vrn) VALUES (2, 'Ford Focus', 'XY34 ZAB');
INSERT INTO vehicle (id, model, vrn) VALUES (3, 'Volkswagen Golf', 'CD56 EFG');
INSERT INTO vehicle (id, model, vrn) VALUES (4, 'Honda Civic', 'HI78 JKL');
INSERT INTO vehicle (id, model, vrn) VALUES (5, 'BMW 3 Series', 'MN90 OPQ');

-- Reset ID sequence after direct ID inserts
-- Due to @GeneratedValue, the db is responsible for auto generating the next ID value
-- If this line is not added, the db might start with id 1, which has already been inserted
ALTER TABLE vehicle ALTER COLUMN id RESTART WITH 6;

-- Insert sample faults
INSERT INTO fault (id, description, severity) VALUES (1, 'Flat tire', 'LOW');
INSERT INTO fault (id, description, severity) VALUES (2, 'Engine overheating', 'HIGH');
INSERT INTO fault (id, description, severity) VALUES (3, 'Brake failure', 'CRITICAL');
INSERT INTO fault (id, description, severity) VALUES (4, 'Battery drain', 'MEDIUM');
INSERT INTO fault (id, description, severity) VALUES (5, 'Oil leak', 'MEDIUM');
INSERT INTO fault (id, description, severity) VALUES (6, 'Transmission issues', 'HIGH');

-- Reset ID sequence after direct ID inserts
ALTER TABLE fault ALTER COLUMN id RESTART WITH 7;

-- Associate faults with vehicles (3 vehicles with faults)
-- Vehicle 1 (Toyota Corolla) with flat tire and battery drain
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (1, 1);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (1, 4);

-- Vehicle 3 (Volkswagen Golf) with engine overheating
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (3, 2);

-- Vehicle 5 (BMW 3 Series) with brake failure, oil leak and transmission issues
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 3);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 5);
INSERT INTO vehicle_fault (vehicle_id, fault_id) VALUES (5, 6);
