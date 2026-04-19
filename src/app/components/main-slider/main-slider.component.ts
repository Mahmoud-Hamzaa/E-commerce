import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:25000,  
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 1
        }
      },
      nav: false
    }

}
