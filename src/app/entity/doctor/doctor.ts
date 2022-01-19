import { Patient } from "../patient/patient";

export class Doctor {
    doctorId: number = 0;
    doctorName: string = "";
    age: number = 0;
    gender: string = "";
    specialist: string = "";
    patients: Patient[] = [];
    
    constructor(){
        
    }
}
