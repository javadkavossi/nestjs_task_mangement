import { IsEmpty, IsIn, IsOptional } from "class-validator";
import { TaskeStatus } from "../tasks.model";

export class GetTaskFilterDto {
    @IsOptional()
    @IsIn([TaskeStatus.DONE , TaskeStatus.IN_PROGRESS , TaskeStatus.OPEN])
    status: TaskeStatus;
    
    @IsEmpty()
    @IsOptional()
    search: string;
}