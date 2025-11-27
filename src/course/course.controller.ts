import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { UpsertCourseDto } from './dto/upsert-course.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard/jwt-auth.guard';


@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get('/')
    findAll() {
        return this.courseService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('/')
    create(@Body() courseBody: UpsertCourseDto){
        return this.courseService.create(courseBody);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.courseService.update(id, body);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.courseService.delete(id);
    }


}
