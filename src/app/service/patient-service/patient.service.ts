import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/entity/patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private getPatientByIdURL = "http://localhost:8080/patient/getPatientById";
  private getAllPatientURL = "http://localhost:8080/patient/getAllPatients";
  private postPatientURL = "http://localhost:8080/patient/postPatient";

  constructor(private httpClient: HttpClient) { }

  getPatientById(): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.getPatientByIdURL}`);
  }

  getAllPatients(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.getAllPatientURL}`)
  }

  viewPatient(expectedPatientId: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.getPatientByIdURL}/${expectedPatientId}`);
  }

  postPatient(patient: Patient): Observable<any> {
    return this.httpClient.post(`${this.postPatientURL}`, patient, {responseType: 'text' as 'json'});
  }
}
