import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventall',
  templateUrl: './eventall.page.html',
  styleUrls: ['./eventall.page.scss'],
})
export class EventallPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
