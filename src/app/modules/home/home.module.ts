import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpComponent } from './pages/http/http.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HttpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
