import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeatherComponent } from './weather/weather.component';
import { DesignationsComponent } from './designations/designations.component';
import { ContactComponent } from './contact/contact.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, WeatherComponent, DesignationsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
