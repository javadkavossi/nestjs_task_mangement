export interface Tasks {
    id : string,
    titel : string,
    descreption : string,
    status : TaskeStatus
}

export enum TaskeStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE" ,
}


