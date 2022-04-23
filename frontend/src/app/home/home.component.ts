import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Project } from '../models/project';
import { SkillMap } from '../models/skill';
import { ProjectService } from '../services/project.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills?: SkillMap;
  projects: Project[] = [];

  isAnchorsNavVisible: boolean = false;

  constructor(private skillService: SkillService, private projectService: ProjectService, public navigationService: NavigationService) { }

  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(skills => this.skills = skills);
    this.projectService.getAllProjects().subscribe(projects => this.projects = projects);
  }

}
