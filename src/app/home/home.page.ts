import { forkJoin } from 'rxjs';
import { TmdbService } from './../api/tmdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modelType = 'movie';
  page: number;
  appCard = [];
  appSlider = [];
  loadingCurrentData: any;

  constructor(private tmdb: TmdbService) {}

  ngOnInit(): void {
    this.initializeTrending();
    this.initialize();
  }

  initialize() {
    this.page = 1;
    this.initializePopular();
  }

  initializePopular() {
    this.page = this.page + 1;
    this.tmdb.getPopular(this.modelType, this.page).subscribe((data) => {
      data.results.forEach((el) => {
        this.appCard.push({
          modelItem: el,
          id: el.id,
          title: el.title,
          image: 'https://image.tmdb.org/t/p/original/' + el.backdrop_path,
          poster: 'https://image.tmdb.org/t/p/original/' + el.poster_path,
          voteRating: el.vote_average,
        });
      });

      if(this.page > 1){
        this.loadingCurrentData.target.complete();
        if(data.results.length === 0){
          this.loadingCurrentData.target.disabled();
        }
      }
    });
  }

  initializeTrending() {
    this.tmdb.getTrending(this.modelType).subscribe((data) => {
      data.results.forEach((el) => {
        this.appSlider.push({
          id: el.id,
          image: 'https://image.tmdb.org/t/p/original/' + el.backdrop_path,
          poster: 'https://image.tmdb.org/t/p/original/' + el.poster_path,
          modelItem: el,
        });
      });
    });
  }

  loadData(event){
    this.page = this.page + 1;
    this.loadingCurrentData = event;
    this.initializePopular();
  }

  cardListener(modelItem){
    forkJoin(this.tmdb.getCredits(this.modelType, modelItem.id),
    this.tmdb.getDetails(this.modelType, modelItem.id)).subscribe(data => {
      modelItem.creditsData = data[0];
      modelItem.detailsData = data[1];
    });
    this.tmdb.presentModal(modelItem, this.modelType);
  }
}
