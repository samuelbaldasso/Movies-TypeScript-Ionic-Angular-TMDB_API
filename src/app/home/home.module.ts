import { ComponentModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SplashComponent } from '../splash/splash.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentModule,
  ],
  declarations: [HomePage, SplashComponent]
})
export class HomePageModule { }
