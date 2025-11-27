import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsDateString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateEnrollmentDto {
  @ApiProperty({ example: "João da Silva" })
  @IsString()
  @IsNotEmpty()
  studentName: string;

  @ApiProperty({ example: "joao.silva@email.com" })
  @IsEmail()
  studentEmail: string;

  @ApiProperty({ example: "123.456.789-10" })
  @IsString()
  @Length(11, 14)
  studentCpf: string;

  @ApiProperty({ example: "(11) 99999-8888" })
  @IsString()
  studentPhone: string;

  @ApiProperty({ example: "2008-03-12" })
  @IsDateString()
  birthDate: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  courseId: number;
}