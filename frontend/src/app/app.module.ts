import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { NetworkBarComponent } from './components/structure/network-bar/network-bar.component';
import { ScrollAnimationModule } from '@uidsign/scroll-animation';
import { ProgressBarComponent } from './components/misc/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NetworkBarComponent,
    ProgressBarComponent,
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
      "showSubtitle": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
