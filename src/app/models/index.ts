export interface Job {
    name: string;
    id: number;
    description: string;
}

export class NewColonist{
    name: string;
    age: string;
    job_id: string;

    constructor(name:string, age:string, job_id:string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}
export class NewEncounter{
    date: string;
    colonist_id: string;
    atype: string;
    action: string;  

    constructor(date: string, colonist_id:string, atype: string, action: string){
        this.date = date;
        this.colonist_id = colonist_id;
        this.atype = atype;
        this.action = action;
    }
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
    atype: Alien;
    action: string;
}
