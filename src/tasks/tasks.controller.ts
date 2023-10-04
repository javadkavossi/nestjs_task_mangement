import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskeStatus } from './tasks.model';
import { createTaskDto } from './dto/creat-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';


@Controller('tasks')
export class TasksController {
    constructor(private tasksSrvice: TasksService) { }

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
           return this.tasksSrvice.getTaskWithFilters(filterDto)     
        } else {
            return this.tasksSrvice.getAllTasks();
        }
    }

    // ========================= Post create task dto ========================
    // @Post()
    // createTaske(
    //     @Body('titel') title: string,
    //     @Body('description') description: string
    // ): Tasks {
    //     return this.tasksSrvice.createTask(title, description);
    // }
    // =============================================================================

    @Post()
    @UsePipes(ValidationPipe)
    createTaske(
        @Body() createTaskDto: createTaskDto
    ): Task {
        return this.tasksSrvice.createTask(createTaskDto);
    }


    //  =========================== getTaskById ===================================

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksSrvice.getTaskById(id);
    }

    //  =========================== delete Task ===================================

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksSrvice.deleteTask(id)
    }

    //  ======================== update Task  Status ===================================

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPipe) status: TaskeStatus,
    ): Task {
        return this.tasksSrvice.updateTaskStatus(id, status)
    }
}
