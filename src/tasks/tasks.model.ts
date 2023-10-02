export interface Task {
    id : string,
    titel : string,
    description : string,
    status : TaskeStatus
}
export enum TaskeStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE" ,
}


