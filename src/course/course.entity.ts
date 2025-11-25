import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100 })
    name: string;

    @Column("text")
    description: string;
}