import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { CollaboratorModule } from "src/collaborator/collaborator.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy/jwt.strategy";

@Module({
  imports: [
    CollaboratorModule, 
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Minha@chaveSecreta!1017',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}



