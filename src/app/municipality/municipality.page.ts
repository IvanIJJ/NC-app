import { Component, OnInit, ViewChild,AfterContentChecked } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit,AfterContentChecked {

  config: SwiperOptions;
  config1: SwiperOptions;

  @ViewChild('slides', {static:false}) slides:IonSlides;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }

  ionSlideDidChange(event){
    console.log("ionSlideDidChange",event);
    this.slides.getActiveIndex().then(index=>{
    console.log(index)})
  }

  ionSlideReachEnd(event){
    console.log(event)
  }
}
