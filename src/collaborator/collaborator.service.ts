import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collaborator } from './collaborator.entity';
import { UpsertCollaboratorDto } from './dto/upsert-collaborator.dto';

@Injectable()
export class CollaboratorService {
  findOne(id: number) {
      throw new Error('Method not implemented.');
  }
  login(data: UpsertCollaboratorDto) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Collaborator)
    private collaboratorRepo: Repository<Collaborator>,
  ) {}

  async findByEmail(email: string) {
    return this.collaboratorRepo.findOne({ where: { email } });
  }
}
