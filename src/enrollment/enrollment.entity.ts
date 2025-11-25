import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    phone: string;
}