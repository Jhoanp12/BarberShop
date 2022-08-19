import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeAboutComponent } from './ui/home-about/home-about.component';
import { HomeComponent } from './ui/home/home.component';


@NgModule({
  declarations: [
    HomeAboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
