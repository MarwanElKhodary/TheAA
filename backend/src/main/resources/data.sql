-- ! Debate if you want to use this or if you want to setup test data like in https://spring.io/guides/gs/accessing-data-jpa
-- Create a table
CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Insert a row into the table
INSERT INTO Users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com');

-- Select all rows from the table
SELECT * FROM Users;
