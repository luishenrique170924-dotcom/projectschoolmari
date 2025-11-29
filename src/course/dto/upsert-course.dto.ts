import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpsertCourseDto {

    @ApiProperty({ example: "Curso de Java" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "Nesse curso vamos aprender a programar em Java"})
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 200})
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({ example: true})
    @IsNotEmpty()
    active: boolean;

}