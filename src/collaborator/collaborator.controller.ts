import { Controller, Post, Body, Get, Param, UnauthorizedException } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { UpsertCollaboratorDto } from './dto/upsert-collaborator.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Collaborators')
@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @ApiOperation({ summary: 'Login do colaborador' })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso. Retorna token e dados do colaborador.',
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas.',
  })
  @Post('login')
  async login(@Body() data: UpsertCollaboratorDto) {
    const result = await this.collaboratorService.login(data);

    if (result === undefined) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return result; 
  }

  @ApiOperation({ summary: 'Buscar colaborador pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Colaborador encontrado com sucesso.',
  })
  @ApiResponse({
    status: 404,
    description: 'Colaborador não encontrado.',
  })
  @ApiBearerAuth() // 🔐 esta rota exige token (caso esteja protegida no service/guard)
  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.collaboratorService.findOne(id);
  }
}

