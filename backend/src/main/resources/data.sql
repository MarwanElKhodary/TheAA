DROP TABLE IF EXISTS Vehicle;

CREATE TABLE Vehicle (
    id INT PRIMARY KEY,
    model VARCHAR(100),
    vrn VARCHAR(100)
);

INSERT INTO Vehicle (id, model, vrn)
VALUES 
    (1, 'Mazda', '123'),
    (2, 'Toyota', '456'),
    (3, 'Hyundai', '789');

-- SELECT * FROM Vehicle;
