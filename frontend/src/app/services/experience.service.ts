import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl: string = "experience"
  private _experiences: Experience[] = [];

  constructor(private http: HttpClient) {
    this.getAllExperiences().pipe(take(1)).subscribe(experiences => {
      this._experiences = experiences;
      this.sort();
    })
  }

  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.baseUrl);
  }

  put(experience: Experience): Observable<void> {
    return this.http.put<void>(this.baseUrl, experience);
  }

  delete(experience: Experience): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${experience.id}`);
  }

  splice(experience: Experience) {
    this._experiences.splice(this._experiences.findIndex(exp => experience.id === exp.id), 1);
  }

  add(experience: Experience) {
    this._experiences.push(experience);
    this.sort();
  }

  update(experience: Experience) {
    const index = this._experiences.findIndex(exp => exp.id === experience.id);
    this._experiences[index] = experience;
    this.sort();
  }

  get experiences(): Experience[] {
    return this._experiences;
  }

  private sort() {
    this._experiences.sort((a: Experience, b: Experience) => {
      return !a.beginDate && !b.beginDate ? 0 : !a.beginDate ? 1 : !b.beginDate ? -1 : a.beginDate === b.beginDate ? 0 : a.beginDate < b.beginDate ? 1 : -1;
    })
  }
}
