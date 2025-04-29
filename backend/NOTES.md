# Notes

- Customize port by setting server.port in application.properties
- Run app with `mvn spring-boot:run` explained [here](https://stackoverflow.com/questions/47258695/mvn-spring-bootrun-vs-java-jar) but same as the run button for now
- The entities determine the table structure in H2
- When the app starts, Spring Boot creates a table based on entities, maps Java fields to table columns and sets up the primary key from the @Id field
- The `extends JpaRepository<>` allows the repository to inherit all standard data access mmethods like `findAll()`, `findById()` etc
- JPA is an API that describes the management of relational data
- Hibernate ORM is an ORM foar mapping an object-oriented domain modeal to a relational database
- `mappedBy` tells Hibernate which variable we are using to represent the parent class to child class
- `cascade` = "If I do something to the parent, should the same thing automatically happen to the children?" - So in this case, yes
- `orphanRemoval` == "If a child is removed from the parent's list (not just deleted from the database manually), it should automatically be deleted from the database too"

## Questions

- Read into Jackson (Spring's default JSON serializer), apparently it requires getters to access the properties to include them in the response

## Assumptions

- Deactivating a vehicle simply means deleting the vehicle from the database. In a production environment, there might be a deactivated vehicles database instead, with features of reactivation.
  - But maybe it should be just an activated boolean value instead - grey it out on the frontend when its deactivated or add a column for it instead of deleting it, ignoring for now
