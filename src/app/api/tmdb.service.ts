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
  constructor(private http: HttpClient, private modal: ModalController) {}

  async presentModal(type: string, modelItem: any) {
    const imodal = await this.modal.create({
      component: ModalComponent,
      componentProps: {
        modelItemList: modelItem,
        modelType: type
      },
    });
    this.currentModal.push(imodal);
    return await imodal.present();
  }

  dismissModal() {
    this.currentModal[this.currentModal.length - 1].dismiss().then(() => {
      this.currentModal.pop();
    });
  }

  getPopular(type: string, page: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${api}&language=pt-BR&page=${page}`;
    return this.http.get(url);
  }

  getTrending(type: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}&language=pt-BR`;
    return this.http.get(url);
  }

  getCredits(type: string, id: string): Observable<any> {
    // const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api}&language=en-US`;
    const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api}&language=pt-BR`;
    return this.http.get(url);
  }

  getDetails(type: string, id: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${api}&language=pt-BR`;
    return this.http.get(url);
  }
}
