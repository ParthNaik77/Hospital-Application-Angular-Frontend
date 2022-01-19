import { Component, OnInit } from '@angular/core';
import { Doctor } from '../entity/doctor/doctor';
import { DoctorService } from '../service/doctor-service/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  message: any;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  addDoctor(){
    this.doctorService.postDoctor(this.doctor).subscribe(data=>{
      this.message=data;
    })
  }

  onSubmit(){
    console.log(this.doctor);
    this.addDoctor();
  }
}
