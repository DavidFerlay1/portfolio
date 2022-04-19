import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  scrollTo(id: string){
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
