import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = "project/";

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl);
  }
}
