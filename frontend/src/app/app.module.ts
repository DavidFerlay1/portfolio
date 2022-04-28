import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { ProgressBarComponent } from './components/misc/progress-bar/progress-bar.component';
import { AvatarComponent } from './components/misc/avatar/avatar.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './components/misc/project/project.component';
import { FieldComponent } from './components/misc/field/field.component';
import { ExperienceComponent } from './components/misc/experience/experience.component';
import { ExperienceDetailComponent } from './components/misc/experience/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressBarComponent,
    AvatarComponent,
    HomeComponent,
    ProjectComponent,
    FieldComponent,
    ExperienceComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
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
