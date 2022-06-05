import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { ExperienceAdminComponent } from './experience-admin/experience-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SkillAdminComponent,
    ExperienceAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
