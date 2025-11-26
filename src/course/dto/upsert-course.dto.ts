import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpsertCourseDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    active: boolean;

}