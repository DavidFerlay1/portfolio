import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill, SkillMap } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "skill/";

  constructor(private http: HttpClient) { }

  getAllSkills(): Observable<SkillMap> {
    return this.http.get<SkillMap>(this.baseUrl);
  }

  createSkill(skill: Skill): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}create`, skill);
  }

  editSkill(skill: Skill): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}edit`, skill);
  }

}
