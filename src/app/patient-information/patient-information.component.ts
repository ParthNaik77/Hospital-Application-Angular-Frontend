import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../entity/patient/patient';
import { PatientService } from '../service/patient-service/patient.service';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {

  patient: Patient = new Patient();
  patients: Patient[] = [];
  selected: number = 0;
  showTable: boolean = false;

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
 
  }

  // viewPatientDetails(id :number){
  //   this.router.navigate(['view-patient',id]);
  //   console.log(id);
  // }

  // onSubmit(){
  //   this.viewPatientDetails(this.selected)
  // }
}
