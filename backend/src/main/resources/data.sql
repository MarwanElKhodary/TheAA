-- ! Debate if you want to use this or if you want to setup test data like in https://spring.io/guides/gs/accessing-data-jpa
-- Create a table
CREATE TABLE IF NOT EXISTS Vehicle (
    id INT PRIMARY KEY,
    model VARCHAR(100),
    vrn VARCHAR(100)
);

-- Insert a row into the table
INSERT INTO Vehicle (id, model, vrn)
VALUES (1, 'Mazda', '123');

-- Select all rows from the table
SELECT * FROM Vehicle;
