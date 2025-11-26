import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { UpsertCourseDto } from './dto/upsert-course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get('/')
    findAll() {
        return this.courseService.findAll();
    }

    @Post('/')
    create(@Body() courseBody: UpsertCourseDto){
        return this.courseService.create(courseBody);
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.courseService.delete(id);
    }


}
