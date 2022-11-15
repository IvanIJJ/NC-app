import { Component, OnInit,ViewChild, AfterContentChecked } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  config: SwiperOptions;
  config1: SwiperOptions;
  categories: any[] = [];
  trips: any[] = [];
  events: any[] = [];
  accomodations: any[] = [];
  restuarants: any[] = [];

  @ViewChild('slides', {static:false}) slides:IonSlides;

  constructor(private router:Router) { }

  ngOnInit() {
    this.categories = [      
      { id: 1, name: 'Music', image: 'assets/images/tent.png' },
      { id: 2, name: '', image: 'assets/images/kheerganga.jpg' },
      { id: 3, name: 'Treking', image: 'assets/images/trek.jpg' },
      { id: 4, name: 'Lake', image: 'assets/images/lake.jpg' },
    ];

    this.trips = [      
      { id: 1,  name: 'Banjir Kanal', category: 'Camp', place: 'Kimberley', image: 'assets/images/banjir.jpg', price: '500' },
      { id: 2,  name: 'Swiss Alps', category: 'Mountains', place: 'Kimberley', image: 'assets/images/swissalps.jpg', price: '300' },
      { id: 3,  name: 'Adi Kailash', category: 'Treking', place: 'Kimberley', image: 'assets/images/kailash.jpg', price: '400' },
      { id: 4,  name: 'Tarsar Lake', category: 'Lake', place: 'Kimberley', image: 'assets/images/tarsar.jpg', price: '1500' },
    ];
    this.accomodations = [      
      { id: 1,  name: 'Flamingo Hotel', category: 'Hotel', place: 'Kimberley', image: 'assets/Tourism/Accomodation/1.jpg', price: '500' },
      { id: 2,  name: 'Protea Hotel', category: 'Lodge', place: 'Kimberley', image: 'assets/Tourism/Accomodation/2.jpg', price: '300' },
      { id: 3,  name: 'Krissy Anne', category: 'Guesthouse', place: 'Upington', image: 'assets/Tourism/Accomodation/3.jpg', price: '400' },
      { id: 4,  name: 'Star Hotel', category: 'Hotel', place: 'Springbok', image: 'assets/Tourism/Accomodation/4.jpg', price: '1500' },
    ];
    this.restuarants = [      
      { id: 1,  name: 'Banjir Kanal', place: 'Kimberley', image: 'assets/Tourism/Restuarants/1.jpg'},
      { id: 2,  name: 'Swiss Alps', place: 'Kimberley', image: 'assets/Tourism/Restuarants/2.jpg'},
      { id: 3,  name: 'Adi Kailash', place: 'Kimberley', image: 'assets/Tourism/Restuarants/3.jpg'},
      { id: 4,  name: 'Tarsar Lake', place: 'Kimberley', image: 'assets/Tourism/Restuarants/4.jpg'},
    ];
    this.events = [      
      { id: 1, date: '15 September 2022', name: 'Color Fest', place: 'Kimberley', image: 'assets/events/event01.jpg', price: '12K' },
      { id: 2, date: '15 September 2022', name: 'Cultural Spring Festival', place: 'Upington', image: 'assets/events/event02.jpg', price: '20K' },
      { id: 3, date: '15 September 2022', name: 'Fill up the Dome', place: 'Kuruman', image: 'assets/events/event03.jpg', price: '5K' },
      { id: 4, date: '15 September 2022', name: 'DJ Nations', place: 'Springbok', image: 'assets/events/event04.jpg', price: '15K' },
    ];
  }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2
    };
    this.config1 = {
      slidesPerView: 2.2
    };
  }

  ionSlideDidChange(event){
    console.log("ionSlideDidChange",event);
    this.slides.getActiveIndex().then(index=>{
    console.log(index)})
  }

  ionSlideReachEnd(event){
    console.log(event)
// 
  }
}