import { EntityRepository, Repository } from "typeorm";
import { task } from "./task.entity";

@EntityRepository(task) 
export class TaskRepository extends Repository<task>{

}