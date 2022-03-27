import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { NetworkBarComponent } from './components/structure/network-bar/network-bar.component';
import { FadeInBlockComponent } from './animation/fadeIn/fade-in-block/fade-in-block.component';
import { FadeInItemComponent } from './animation/fadeIn/fade-in-item/fade-in-item.component';
import { AnimationLinkDirective } from './animation/animation-link.directive';
import { AnimatedChainDirective } from './animation/animation-chain.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NetworkBarComponent,
    FadeInBlockComponent,
    FadeInItemComponent,
    AnimationLinkDirective,
    AnimatedChainDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
