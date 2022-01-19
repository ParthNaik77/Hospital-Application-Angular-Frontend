import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../entity/patient/patient';
import { PatientService } from '../service/patient-service/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patient: Patient = new Patient();
  id: number = 0;
  selected: number = 0;
  showTable: boolean = false;
  constructor(private patientService: PatientService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params[];
  }

  pat(id: number){
    this.patient = new Patient();
    this.patientService.viewPatient(id).subscribe(data=>{
      this.patient = data;
      console.log(this.selected)
    })
  }
  onSubmit(selected: number){
    console.log(this.selected);
    this.selected = selected;
    this.pat(selected)
  }

  toggleShow(){
    this.showTable = !this.showTable;
  }

}
