import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/entity/doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/doctor/getAllDoctors";
  private postDoctorURL = "http://localhost:8080/doctor/postDoctor";
  private getNumberOfPatientsVisitedURL = "http://localhost:8080/doctor/getNumberOfPatientsVisited";

  constructor(private httpClient: HttpClient) {}

  getDoctorsList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`)
  }

  postDoctor(doctor: Doctor): Observable<any> {
    return this.httpClient.post(`${this.postDoctorURL}`, doctor, {responseType: 'text' as 'json'});
  }
  
  getNumberOfPatientsVisited(expectedDoctorId: number): Observable<number>{
    return this.httpClient.get<number>(`${this.getNumberOfPatientsVisitedURL}/${expectedDoctorId}`);
  }

}
