import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from './../slider/slider.component';
import { ModalComponent } from './../modal/modal.component';
import { CardComponent } from './../card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CardComponent, ModalComponent, SliderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [CardComponent, ModalComponent, SliderComponent]
})
export class ComponentModule { }
