import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskeStatus } from "./tasks.model";

@Entity()
export class task extends  BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titel:string;

    @Column()
    description:string

    @Column()
    status:TaskeStatus

}