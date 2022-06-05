import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { ProgressBarComponent } from './components/misc/progress-bar/progress-bar.component';
import { AvatarComponent } from './components/misc/avatar/avatar.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './components/misc/project/project.component';
import { ExperienceComponent } from './components/misc/experience/experience.component';
import { ExperienceDetailComponent } from './components/misc/experience/experience-detail/experience-detail.component';
import { SharedModule } from './shared/shared.module';
import { SkillFormComponent } from './components/forms/skill-form/skill-form.component';
import { ConfirmComponent } from './components/dialogs/confirm/confirm.component';
import { ExperienceDetailFormComponent } from './components/forms/experience-detail-form/experience-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressBarComponent,
    AvatarComponent,
    HomeComponent,
    ProjectComponent,
    ExperienceComponent,
    ExperienceDetailComponent,
    SkillFormComponent,
    ConfirmComponent,
    ExperienceDetailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
