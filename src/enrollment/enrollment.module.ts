import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './enrollment.entity';
import { Course } from '../course/course.entity';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment, Course])],
  providers: [EnrollmentService],
  controllers: [EnrollmentController],
})
export class EnrollmentsModule {}
export class EnrollmentModule {}
