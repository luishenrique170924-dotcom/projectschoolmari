import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class UpsertCollaboratorDto {

    @ApiProperty({ example: "Victor"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "victor@gmail.com"})
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: "Victor#@$123456"})
    @IsString()
    @IsNotEmpty()
    password: string;
    
}