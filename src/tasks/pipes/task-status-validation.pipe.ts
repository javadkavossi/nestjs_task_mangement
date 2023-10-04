import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskeStatus } from "../tasks.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly alloewStatus = [
        TaskeStatus.OPEN,
        TaskeStatus.IN_PROGRESS,
        TaskeStatus.DONE,
    ]
    transform(value: any,) {
        value = value.toUpperCase()
        if (!this.isStatusValid(value))
            throw new BadRequestException(`${value} value is invalid status `)
        return value
    }
    private isStatusValid(status: any) {
        const idx = this.alloewStatus.indexOf(status)
        return idx !== -1;
    }
}