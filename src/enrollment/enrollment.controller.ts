import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/upsert-enrollment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard/jwt-auth.guard';

@Controller('enrollment')
@UseGuards(JwtAuthGuard)
export class EnrollmentController {
  constructor(private readonly enrollmentsService: EnrollmentService) {}

  @Post()
  async create(@Body() dto: CreateEnrollmentDto) {
    const result = await this.enrollmentsService.create(dto);

    // Formatar resposta no padrão solicitado
    return {
      id: result.id,
      studentName: result.studentName,
      studentCpf: result.studentCpf,
      courseId: result.course.id,
      createdAt: result.createdAt,
    };
  }
}
