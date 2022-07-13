import { TmdbService } from './../api/tmdb.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isLoading: boolean;
  title: string;
  background: string;
  castList = [];
  crewList = [];

  constructor(private tmdb: TmdbService, private navParams: NavParams) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.isLoading = true;
    const { modelItemList } = this.navParams.data;
    const id = modelItemList.detailsData.id;
    this.title = modelItemList.detailsData.title;
    this.background =
      'https://image.tmdb.org/t/p/original/' +
      modelItemList.detailsData.backdrop_path;

    modelItemList.creditsData.cast.forEach((el) => {
      if (el.profile_path) {
        el.profile_path =
          'https://www.themoviedb.org/t/p/w138_and_h175_face/' +
          el.profile_path;
      }
      this.castList.push(el);
    });

    modelItemList.creditsData.crew.forEach((el) => {
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
