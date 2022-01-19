import { Component, OnInit } from '@angular/core';
import { Doctor } from '../entity/doctor/doctor';
import { DoctorService } from '../service/doctor-service/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];
  doc: Doctor = new Doctor;
  showTable: boolean = false;
  numberOfPatients: number = 0;
  id: number = 0;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }

  public getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data =>{
      this.doctors = data;
    })
  }

  toggleShow(){
    this.showTable = !this.showTable;
  }

  numberOfPatient(id: number){
    this.doctorService.getNumberOfPatientsVisited(id).subscribe(data=>{
      this.numberOfPatients = data;
      console.log(this.numberOfPatients)
    })
  }  
  
  // filter(event: any){
  //   this.doctors.filter((item)=> item.doctorId === event.target.value)
  //   console.log(event.target.value);
  // }

  selectChange($event: any){
    this.doc = this.doctors.filter((item)=> item.doctorId == $event)[0];
    this.id = this.doc.doctorId;
    this.numberOfPatient(this.id)
    //console.log(this.id)
    
  }
}
