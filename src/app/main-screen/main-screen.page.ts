import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  home: any[] = [];
  item: any;


  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
