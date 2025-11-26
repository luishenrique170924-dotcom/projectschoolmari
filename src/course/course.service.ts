import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { UpsertCourseDto } from './dto/upsert-course.dto';

@Injectable()
export class CourseService {
    private courses: Array<any>;

    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>
    ) {
        this.courses = [
            {
                "id": 1,
                "name": "Curso de NestJS",
                "description": "Aprenda a construir aplicações escaláveis com NestJS",
                "price": 199.99,
                "active": true
            }
        ];
    }

    findAll() {
        return this.courseRepository.find();
    }

    async create(course: UpsertCourseDto) {
        const newCourse = this.courseRepository.create(course);
        await this.courseRepository.save(newCourse);
        return newCourse;
    };

    async update(id: number, data: any) {
    await this.courseRepository.update(id, data);
    return { message: "Atualizado com sucesso" };

    }

    async delete(id: number) {
        await this.courseRepository.delete(id);
        return { message: "Deletado com sucesso" };
    }




}