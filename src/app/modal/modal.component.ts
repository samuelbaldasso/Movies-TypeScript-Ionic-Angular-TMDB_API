import { TmdbService } from './../api/tmdb.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modelItemList: any;

  isLoading: boolean;
  id: any;
  title: string;
  background: string;
  castList = [];
  crewList = [];

  constructor(private tmdb: TmdbService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.isLoading = true;
    this.title = this.modelItemList.detailsData.title;
    this.id = this.modelItemList.detailsData.id;
    this.background = 'https://image.tmdb.org/t/p/original/' + this.modelItemList.detailsData.backdrop_path;

    this.modelItemList.creditsData.cast.forEach((el) => {
      if (el.profile_path) {
        el.profile_path =
          'https://www.themoviedb.org/t/p/w138_and_h175_face/' +
          el.profile_path;
      }
      this.castList.push(el);
    });

    this.modelItemList.creditsData.crew.forEach((el) => {
      if (el.profile_path) {
        el.profile_path =
          'https://www.themoviedb.org/t/p/w138_and_h175_face/' +
          el.profile_path;
      }
      this.crewList.push(el);
    });

    this.isLoading = false;
  }

  onClick() {
    this.tmdb.dismissModal();
  }
}
