import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
  {path: 'doctorInformation', component:DoctorListComponent},
  {path: 'add-doctor', component:AddDoctorComponent},
  // {path: 'patient-information', component:PatientInformationComponent},
  {path: 'view-patient/:expectedPatientId', component:ViewPatientComponent},
  {path: 'number-of-patients-visited/:expectedDoctorId', component:DoctorListComponent},
  {path: 'add-patient', component:AddPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
