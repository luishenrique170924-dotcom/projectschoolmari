import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Course } from "../course/course.entity";


@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentName: string;

  @Column()
  studentEmail: string;

  @Column()
  studentCpf: string;

  @Column()
  studentPhone: string;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Course, { onDelete: 'CASCADE' })
  course: Course;
}

