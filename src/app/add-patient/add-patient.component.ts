import { Component, OnInit } from '@angular/core';
import { Doctor } from '../entity/doctor/doctor';
import { Patient } from '../entity/patient/patient';
import { DoctorService } from '../service/doctor-service/doctor.service';
import { PatientService } from '../service/patient-service/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctor: Doctor = new Doctor();
  doctors: Doctor[] = [];
  message: any;

  constructor(private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  addPatients() {
    this.patientService.postPatient(this.patient).subscribe(data=>{
      this.message = data;
    })
  }

  onSubmit(){
    console.log(this.patient);
    this.addPatients();
  }

  public getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data =>{
      this.doctors = data;
    })
  }

  selectChange($event: any){
    this.doctor = this.doctors.filter((item)=> item.doctorId == $event)[0];
    console.log(this.doctor.doctorId)
  }
}
