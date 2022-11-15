import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  public onboardSlides = [];
  @ViewChild(IonSlides)  slides: IonSlides;
  constructor() { }

  ngOnInit() {
    this.onboardSlides = [
    ];
  }
  public skipBtn (){
    console.log();
  }
  public goBack(){
    this.slides.slidePrev();
  }

  public goNext(){
    this.slides.slideNext();
      }
}
