import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = "project";
  private _projects: Project[] = [];

  constructor(private http: HttpClient) {
    this.getAllProjects().pipe(take(1)).subscribe((projects) => this._projects = projects);
  }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl);
  }

  post(body: {project: Project, file: File | null}): Observable<Project> {
    const formData = new FormData();
    if(body.file)
      formData.append('file', body.file)
    formData.append('jsonProject', JSON.stringify(body.project));
    return this.http.post<Project>(this.baseUrl, formData);
  }

  delete(project: Project) {
    return this.http.delete(`${this.baseUrl}/${project.id}`);
  }

  splice(project: Project) {
    this._projects.splice(this._projects.indexOf(project), 1);
  }

  add(project: Project) {
    this._projects.push(project);
  }

  put(project: Project) {
    const index = this._projects.findIndex(p => p.id === project.id);
    this._projects[index] = project;
  }

  get projects() {
    return this._projects;
  }
}
