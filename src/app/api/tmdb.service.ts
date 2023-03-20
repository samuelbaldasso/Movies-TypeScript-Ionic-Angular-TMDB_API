import { ModalComponent } from './../modal/modal.component';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const api = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  currentModal = [];
  modalOpen = false;
  constructor(private http: HttpClient, private modal: ModalController) { }

  async presentModal(modelItem, type) {
    if (!this.modalOpen) {
      this.modalOpen = true;
      const modal = await this.modal.create({
        component: ModalComponent,
        componentProps: {
          modelItemList: modelItem,
          modelType: type
        }
      });
      this.currentModal.push(modal);
      return await modal.present();
    }
  }

  dismissModal() {
    this.modalOpen = false;
    this.currentModal[this.currentModal.length - 1].dismiss().then(() => {
      this.currentModal.pop();
    });
  }

  getPopular(type: string, page: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${api}&language=&append_to_response=images&page=${page}`;
    return this.http.get(url);
  }

  getTrending(type: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}&language=&append_to_response=images`;
    return this.http.get(url);
  }

  getCredits(type: string, id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api}&language=&append_to_response=images`;
    return this.http.get(url);
  }

  getDetails(type: string, id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}&language=&append_to_response=images`;
    return this.http.get(url);
  }
}
