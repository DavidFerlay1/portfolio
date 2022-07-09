import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Skill, SkillMap } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "skill/";
  private _skillMap?: SkillMap;

  constructor(private http: HttpClient) {
    this.getAllSkills()
      .pipe(take(1))
      .subscribe(skills => this._skillMap = skills);
   }

  getAllSkills(): Observable<SkillMap> {
    return this.http.get<SkillMap>(this.baseUrl);
  }

  createSkill(skill: Skill): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}create`, skill);
  }

  editSkill(skill: Skill): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}edit`, skill);
  }

  deleteSkill(skill: Skill): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}delete/${skill.id}`)
  }

  get skillMap() {
    return this._skillMap;
  }

  updateSkillInList(newSkill: Skill) {
    const targetList = newSkill.type === "front" ? this._skillMap!.front : this._skillMap!.back;
    const index = targetList.findIndex(skill => skill.id === newSkill.id);

    if(index !== -1) {
      targetList[index] = newSkill;
    } else {
      const altList = newSkill.type === "back" ? this._skillMap!.front : this._skillMap!.back;
      const altIndex = altList.findIndex(skill => skill.id === newSkill.id);
      altList.splice(altIndex, 1);
      targetList.push(newSkill);
    }
    targetList.sort((a, b) => b.level - a.level);
  }

  addSkillInList(newSkill: Skill) {
    const targetList = newSkill.type === "front" ? this._skillMap!.front : this._skillMap!.back;
    targetList.push(newSkill);
    targetList.sort((a, b) => b.level - a.level);
  }

  removeSkillFromList(skillToDelete: Skill) {
    const targetList = skillToDelete.type === "front" ? this._skillMap!.front : this._skillMap!.back;
    const index = targetList.findIndex(skill => skill.id === skillToDelete.id);
    targetList.splice(index, 1);
  }

}
