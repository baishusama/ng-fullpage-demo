import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinComponent } from './fin/fin.component';
import { SliderComponent } from './slider/slider.component';
import { IntroductionComponent } from './introduction/introduction.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinComponent,
    SliderComponent,
    IntroductionComponent
  ],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
