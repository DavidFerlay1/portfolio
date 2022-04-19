import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { ScrollAnimationModule } from '@uidsign/scroll-animation';
import { ProgressBarComponent } from './components/misc/avatar/progress-bar/progress-bar.component';
import { AvatarComponent } from './components/misc/avatar/avatar.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './components/misc/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressBarComponent,
    AvatarComponent,
    HomeComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollAnimationModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#e23636",
      "backgroundOpacity": 0,
      "backgroundStroke": "#f51919",
      "backgroundStrokeWidth": 0,
      "backgroundPadding": -39,
      "radius": 25,
      "space": 5,
      "toFixed": 1,
      "maxPercent": 580,
      "unitsFontSize": "8",
      "unitsFontWeight": "100",
      "unitsColor": "#ccd6f6",
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#64ffda",
      "outerStrokeGradientStopColor": "#ffffff",
      "outerStrokeLinecap": "butt",
      "innerStrokeColor": "#ccd6f6",
      "innerStrokeWidth": 1,
      "titleColor": "#64ffda",
      "titleFontSize": "10",
      "titleFontWeight": "100",
      "subtitleColor": "#744949",
      "subtitleFontWeight": "100",
      "imageHeight": 58,
      "imageWidth": 50,
      "showSubtitle": false}),
      HttpClientModule
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
