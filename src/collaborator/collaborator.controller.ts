import { Controller, Post, Body, Get, Param, UnauthorizedException } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { UpsertCollaboratorDto } from './dto/upsert-collaborator.dto';

@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @Post('login')
  async login(@Body() data: UpsertCollaboratorDto) {
    const result = await this.collaboratorService.login(data);

    if (result === undefined) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return result; 
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.collaboratorService.findOne(id);
  }
}

