import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskeStatus, Task } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDto } from './dto/creat-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { NotFoundError } from 'rxjs';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    // -----------------------------------------------
    getAllTasks(): Task[] {
        return this.tasks
    }
    // ---------------------------------------------
    createTask(createTaskDto: createTaskDto) {
        const { titel, description } = createTaskDto;
        const task: Task = {
            id: uuidv4(),
            titel,
            description,
            status: TaskeStatus.OPEN
        }
        this.tasks.push(task)
        return task
    }
    // ----------------------------------------------

    getTaskById(id: string): Task {
       const found = this.tasks.find(task => task.id === id)
       if(!found){
        throw new NotFoundException(`task with ID : ${id} Not Found... ! `)
       }else{
        return found
       }
    }

    // ----------------------------------------------

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    // ----------------------------------------------

    updateTaskStatus(id: string, status: TaskeStatus): Task {
        const task = this.getTaskById(id)
        task.status = status
        return task
    }

    // ---------------------------------------------- get Based search and titel and status ore get all with Qoury

    getTaskWithFilters(filterDto: GetTaskFilterDto): Task[] {
        const { status, search } = filterDto
        let tasks = this.getAllTasks();

        if (status) {
            tasks = tasks.filter(task => task.status === status)
        }

        if (search) {
            tasks = tasks.filter(task =>
                task.titel.includes(search) ||
                task.description.includes(search)
            )
        }
        return tasks

    }


}
