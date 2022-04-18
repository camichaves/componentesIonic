import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],

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
