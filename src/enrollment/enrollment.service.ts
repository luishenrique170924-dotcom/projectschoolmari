import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Enrollment } from "./enrollment.entity";
import { Repository } from "typeorm";
import { Course } from "src/course/course.entity";
import { CreateEnrollmentDto } from "./dto/upsert-enrollment.dto";

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepo: Repository<Enrollment>,

    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ) {}

  async create(data: CreateEnrollmentDto): Promise<Enrollment> {
    const course = await this.courseRepo.findOne({ where: { id: data.courseId } });

    if (!course) {
      throw new NotFoundException(`Course with id ${data.courseId} not found`);
    }

    const enrollment = this.enrollmentRepo.create({
      studentName: data.studentName,
      studentEmail: data.studentEmail,
      studentCpf: data.studentCpf,
      studentPhone: data.studentPhone,
      birthDate: new Date(data.birthDate),
      course: course,
    });

    return await this.enrollmentRepo.save(enrollment);
  }
}