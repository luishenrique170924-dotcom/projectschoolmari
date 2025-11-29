import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './collaborator.entity';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Collaborator])],
  providers: [CollaboratorService],
  controllers: [CollaboratorController],
  exports: [CollaboratorService], 
})
export class CollaboratorModule {}

