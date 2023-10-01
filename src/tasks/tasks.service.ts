import { Injectable } from '@nestjs/common';
import { TaskeStatus, Tasks } from './tasks.dto';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TasksService {
    private tasks: Tasks[] = [];
    getAllTasks(): Tasks[] {
        return this.tasks
    }

    createTask(titel : string , descreption:string){

            const task :Tasks = {
                id:uuidv4(),
                titel,
                descreption,
                status:TaskeStatus.OPEN
            }

            this.tasks.push(task)
            return task
    }

}
