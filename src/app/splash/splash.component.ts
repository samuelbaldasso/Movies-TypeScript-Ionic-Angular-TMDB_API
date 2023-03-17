import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private router: Router, private plat: Platform) { }

  ngOnInit() {
    this.plat.ready().then(() => setTimeout(() => this.router.navigateByUrl('home'), 2000));
  }

}
