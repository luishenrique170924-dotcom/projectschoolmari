import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CollaboratorService } from 'src/collaborator/collaborator.service';

@Injectable()
export class AuthService {
  constructor(
    private collaboratorService: CollaboratorService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.collaboratorService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Colaborador não encontrado');
    }

    // 👉 AGORA compara direto, sem bcrypt
    if (password !== user.password) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

