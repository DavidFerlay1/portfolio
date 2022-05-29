import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl: string = "experience/"

  constructor(private http: HttpClient) { }

  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.baseUrl);
  }
}
