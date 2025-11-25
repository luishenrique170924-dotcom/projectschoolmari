import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), CourseModule, EnrollmentModule, CollaboratorModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}