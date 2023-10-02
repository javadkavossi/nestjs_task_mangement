import { TaskeStatus } from "../tasks.model";

export class GetTaskFilterDto {
    status: TaskeStatus;
    search: string;
}