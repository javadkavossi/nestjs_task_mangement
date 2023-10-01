import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.dto';


@Controller('tasks')
export class TasksController {
    constructor(private tasksSrvice: TasksService) { }

    @Get()
    getAllTasks(): Tasks[] {
        return this.tasksSrvice.getAllTasks();
    }

    @Post()
    createTaske(
        @Body('titel') title: string,
        @Body('description') description: string
    ) : Tasks {
         return this.tasksSrvice.createTask(title , description);
    }
}
