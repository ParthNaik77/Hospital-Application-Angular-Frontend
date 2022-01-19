import { Doctor } from "../doctor/doctor";

export class Patient {
    patientId: any;
    patientName: string = "";
    age: any;
    doctor: Doctor = new Doctor;
    dateOfVisit: string = "";
    prescription: string = "";
}
