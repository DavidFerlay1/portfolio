import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project?: Project;

  title: string = "";
  description: string = "";
  githubUrl?: string;
  projectUrl?: string;
  previewFileUrl?: string;

  ngOnInit(): void {
    if(this.project) {
      this.title = this.project.title || '';
      this.description = this.project.description || '';
      this.githubUrl = this.project.githubUrl;
      this.projectUrl = this.project.websiteUrl;
      this.previewFileUrl = this.project.previewFile?.path;
    }
  }

}
