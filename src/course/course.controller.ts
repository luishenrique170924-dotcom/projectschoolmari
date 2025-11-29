  import { Body,Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
  import { CourseService } from './course.service';
  import { UpsertCourseDto } from './dto/upsert-course.dto';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard/jwt-auth.guard';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
  
  @ApiTags('Courses')
  @Controller('course')
  export class CourseController {
    constructor(private readonly courseService: CourseService) {}
  
    @ApiOperation({ summary: 'Listar todos os cursos' })
    @ApiResponse({
      status: 200,
      description: 'Lista de cursos retornada com sucesso.',
    })
    @Get('/')
    findAll() {
      return this.courseService.findAll();
    }
  
    
    @ApiOperation({ summary: 'Criar um novo curso' })
    @ApiResponse({
      status: 201,
      description: 'Curso criado com sucesso.',
    })
    @ApiResponse({
      status: 400,
      description: 'Dados inválidos enviados.',
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('/')
    create(@Body() courseBody: UpsertCourseDto) {
      return this.courseService.create(courseBody);
    }
  
    @ApiOperation({ summary: 'Atualizar um curso' })
    @ApiResponse({
      status: 200,
      description: 'Curso atualizado com sucesso.',
    })
    @ApiResponse({
      status: 404,
      description: 'Curso não encontrado.',
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
      return this.courseService.update(id, body);
    }
  
    @ApiOperation({ summary: 'Deletar um curso' })
    @ApiResponse({
      status: 200,
      description: 'Curso deletado com sucesso.',
    })
    @ApiResponse({
      status: 404,
      description: 'Curso não encontrado.',
    })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id: number) {
      return this.courseService.delete(id);
    }
  }

  
  
  
  
  
  
  