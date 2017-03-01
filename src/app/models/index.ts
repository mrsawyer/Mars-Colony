export interface Job {
    name: string;
    id: number;
    description: string;
}

export class NewColonist{
    name: string;
    age: number;
    job_id: Job;
}
export class NewEncounter{
    date: number;
    colonist_id: string;
    atype: string;
    action: string;  
}

export interface Colonist {
    name: string;
    job: Job;
    id: number;
    age: number;
}

export interface Alien{
    type: string;
    submitted_by: string;
    id: number;
    description: string;
}

export interface Encounter{
    id: number;
    date: number;
    colonist_id: number;
    atype: string;
    action: string;
}
