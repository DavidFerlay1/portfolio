import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NavigationService } from '../components/structure/header/navigation.service';
import { Project } from '../models/project';
import { SkillMap } from '../models/skill';
import { ProjectService } from '../services/project.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  skills?: SkillMap;
  projects: Project[] = [];

  anchorsElements: HTMLElement[] = [];
  isAnchorsNavVisible: boolean = false;

  @ViewChildren('anchor') anchors?: QueryList<ElementRef<HTMLElement>>;

  @HostListener('window:scroll', []) onScroll(): void {
    this.isAnchorsNavVisible = window.scrollY >= this.anchorsElements[1].offsetTop;
  }

  constructor(private skillService: SkillService, private projectService: ProjectService, public navigationService: NavigationService) { }

  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(skills => this.skills = skills);
    this.projectService.getAllProjects().subscribe(projects => this.projects = projects);
  }

  ngAfterViewInit(): void {
    this.anchors?.forEach(anchor => this.anchorsElements.push(anchor.nativeElement));
  }

  scrollToPreviousAnchor() {
    const position = window.scrollY;

    let previousAnchor = this.anchorsElements[0];
    // this.anchorsElements.forEach(item => console.log(item.offsetTop))

    this.anchorsElements.forEach(anchor => {
      if(anchor.offsetTop + 25 < position){
        console.log(anchor.offsetTop, anchor, 'inférieur à', position)
        previousAnchor = anchor;
      }
    })

    console.log(position, previousAnchor.offsetTop)

    this.navigationService.scrollTo(previousAnchor.id);
  }

  scrollToNextAnchor() {
    const position = window.scrollY;

    let previousAnchor = this.anchorsElements[this.anchorsElements.length - 1];

    for(var i = this.anchorsElements.length - 1; i >= 0; i-- ){
      if(this.anchorsElements[i].offsetTop > position)
        previousAnchor = this.anchorsElements[i];
    }

    this.navigationService.scrollTo(previousAnchor.id);
  }

}
