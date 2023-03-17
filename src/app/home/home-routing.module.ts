import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SplashComponent } from '../splash/splash.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    component: SplashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
