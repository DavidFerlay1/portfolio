import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { ExperienceAdminComponent } from './experience-admin/experience-admin.component';
import { ProjectAdminComponent } from './project-admin/project-admin.component';
import { SharedModule } from '../shared/shared.module';
import { EditorModule } from 'primeng/editor';
import { ExperienceDetailFormComponent } from '../components/forms/experience-detail-form/experience-detail-form.component';
import { FileAdminComponent } from './file-admin/file-admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    SkillAdminComponent,
    ExperienceAdminComponent,
    ProjectAdminComponent,
    FileAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    EditorModule
  ]
})
export class AdminModule { }
