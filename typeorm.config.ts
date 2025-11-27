import { DataSource } from "typeorm";
import { Course } from "./src/course/course.entity";
import { Enrollment } from "./src/enrollment/enrollment.entity";
import { Collaborator } from "./src/collaborator/collaborator.entity";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",      
    database: "school_mari",
    entities: [Course, Collaborator, Enrollment],
    migrations: ["src/migrations/*.ts"],   
});

