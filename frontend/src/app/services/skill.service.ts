import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Skill, SkillMap } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = "skill";
  private _skillMap?: SkillMap;

  constructor(private http: HttpClient) {
    this.getAllSkills()
      .pipe(take(1))
      .subscribe(skills => {
        skills.front.sort((a, b) => b.level - a.level)
        skills.back.sort((a, b) => b.level - a.level)
        skills.misc.sort((a, b) => b.level - a.level)
        this._skillMap = skills;
      });
   }

  getAllSkills(): Observable<SkillMap> {
    return this.http.get<SkillMap>(this.baseUrl);
  }

  createSkill(skill: Skill): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, skill);
  }

  editSkill(skill: Skill): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}`, skill);
  }

  deleteSkill(skill: Skill): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${skill.id}`)
  }

  get skillMap() {
    return this._skillMap;
  }

  updateSkillInList(newSkill: Skill) {
    const targetList = newSkill.type === "front" ? this._skillMap!.front : newSkill.type === "back" ? this._skillMap!.back : this._skillMap!.misc;
    const index = targetList.findIndex(skill => skill.id === newSkill.id);

    if(index !== -1) {
      targetList[index] = newSkill;
    } else {
      const altList = newSkill.type === "back" ? this._skillMap!.front : newSkill.type === "back" ? this._skillMap!.back : this._skillMap!.misc;
      const altIndex = altList.findIndex(skill => skill.id === newSkill.id);
      altList.splice(altIndex, 1);
      targetList.push(newSkill);
    }
    targetList.sort((a, b) => b.level - a.level);
  }

  addSkillInList(newSkill: Skill) {
    const targetList = newSkill.type === "front" ? this._skillMap!.front : newSkill.type === "back" ? this._skillMap!.back : this._skillMap!.misc;
    targetList.push(newSkill);
    targetList.sort((a, b) => b.level - a.level);
  }

  removeSkillFromList(skillToDelete: Skill) {
    const targetList = skillToDelete.type === "front" ? this._skillMap!.front : skillToDelete.type === "back" ? this._skillMap!.back : this._skillMap!.misc;
    const index = targetList.findIndex(skill => skill.id === skillToDelete.id);
    targetList.splice(index, 1);
  }

}
