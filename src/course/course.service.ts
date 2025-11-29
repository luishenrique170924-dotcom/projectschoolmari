import { Injectable, NotFoundException } from '@nestjs/common';
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
        const course = await this.courseRepository.findOne({ where: { id } });
      
        if (!course) {
          throw new NotFoundException('Curso não encontrado');
        }
      
        course.active = false;
      
        await this.courseRepository.save(course);
      
        return {
          message: 'Curso marcado como inativo com sucesso.',
        };
      }



}