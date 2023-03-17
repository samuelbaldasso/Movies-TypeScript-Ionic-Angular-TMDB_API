import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() sliderInputValue;
  @Output() sliderTrigger = new EventEmitter();
  slideOpts = {};

  constructor(public plat: Platform) { }

  ngOnInit() { }
  //   this.platformCheck();
  //   this.plat.resize.subscribe(async () => {
  //     this.platformCheck();
  //   });
  // }

  // platformCheck() {
  //   if (this.plat.width() >= 425) {
  //     this.slideOpts = {
  //       slidesPerView: 2,
  //       freeMode: false,
  //     };
  //   } else {
  //     this.slideOpts = {
  //       slidesPerView: 1,
  //       freeMode: false,
  //     };
  //   }
  // }

  // sliderClick(model) {
  //   this.sliderTrigger.emit(model);
  // }
}
