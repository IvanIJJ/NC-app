import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loadshedding',
  templateUrl: './loadshedding.page.html',
  styleUrls: ['./loadshedding.page.scss'],
})
export class LoadsheddingPage implements OnInit {
  searchTerm: string;
  loadshedding = [
   {
    Place:"Ashburnham",
    Date:"12 October 2022",
    Time:"14:00-16:00",
    Stage:"Stage 2",
   },
   {
    Place:"Herlear&Hall",
    Date:"13 September 2022",
    Time:"10:00-13:00",
    Stage:"Stage 3",
   },
   {
    Place:"Southridge",
    Date:"15 August 2022",
    Time:"17:00-19:00",
    Stage:"Stage 2",
   },
   {
    Place:"Hadisonpark",
    Date:"23 Augusts 2022",
    Time:"08:00-12:00",
    Stage:"Stage 4",
   },
   {
    Place:"Galeshewe & Caters Glen",
    Date:"3 Septembber 2022 ",
    Time:"22:00-01:00",
    Stage:"Stage 3",
   },
   {
    Place:"H.A Morris & Midlands",
    Date:"7 October 2022",
    Time:"06:00-08:00",
    Stage:"Stage 2",
   },
  ];
  watercuts = [
    {
     Place:"Ashburnham",
     Date:"12 October 2022",
     Time:"14:00-16:00",
    },
    {
     Place:"Herlear&Hall",
     Date:"13 September 2022",
     Time:"10:00-13:00",
    },
    {
     Place:"Southridge",
     Date:"15 August 2022",
     Time:"17:00-19:00",
    },
    {
     Place:"Hadisonpark",
     Date:"23 Augusts 2022",
     Time:"08:00-12:00",
    },
    {
     Place:"Galeshewe & Caters Glen",
     Date:"3 Septembber 2022 ",
     Time:"22:00-01:00",
    },
    {
     Place:"H.A Morris & Midlands",
     Date:"7 October 2022",
     Time:"06:00-08:00",
    },
   ];
  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
 