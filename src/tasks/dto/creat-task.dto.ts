import { IsNotEmpty } from "class-validator";

export class createTaskDto {
    @IsNotEmpty()
    titel: string;

    @IsNotEmpty()
    description: string;
}