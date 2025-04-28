# Notes

- Customize port by setting server.port in application.properties
- Run app with `mvn spring-boot:run` explained [here](https://stackoverflow.com/questions/47258695/mvn-spring-bootrun-vs-java-jar) but same as the run button for now
- The entities determine the table structure in H2
- When the app starts, Spring Boot creates a table based on entities, maps Java fields to table columns and sets up the primary key from the @Id field
- The `extends JpaRepository<>` allows the repository to inherit all standard data access mmethods like `findAll()`, `findById()` etc

## Assumptions

- Deactivating a vehicle simply means deleting the vehicle from the database. In a production environment, there might be a deactivated vehicles database instead, with features of reactivation.
