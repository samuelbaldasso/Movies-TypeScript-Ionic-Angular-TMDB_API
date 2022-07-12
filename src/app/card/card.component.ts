import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() cardInputValue;
  @Output() cardTrigger = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  cardClick(model){
    this.cardTrigger.emit(model);
  }

}
