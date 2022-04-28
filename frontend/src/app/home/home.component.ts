import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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

  @ViewChild("grid") grid!: ElementRef<HTMLElement>;
  @ViewChildren("navLink") navLinks!: QueryList<ElementRef<HTMLElement>>;

  constructor(private skillService: SkillService,
              private projectService: ProjectService,
              public navigationService: NavigationService,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(skills => this.skills = skills);
    this.projectService.getAllProjects().subscribe(projects => this.projects = projects);
  }

  onResumeNavLinkClick(index: number) {
    this.navLinks.forEach((navLink, i) =>  {
      if(index === i)
        this.renderer.addClass(navLink.nativeElement, "active")
      else
        this.renderer.removeClass(navLink.nativeElement, "active")
    })

    this.renderer.setStyle(this.grid.nativeElement, "transform", `translateX(${index * 100 * -1}vw)`);
  }

}
