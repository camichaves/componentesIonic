import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  template: `
  <ion-content>
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <h1>Slide 1</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 2</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  </ion-content>
`
})


export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  slideOpts = {
    initialSlide: 1,
    speed: 400
    

  };
  
  
}
