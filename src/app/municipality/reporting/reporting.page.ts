import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.page.html',
  styleUrls: ['./reporting.page.scss'],
})
export class ReportingPage implements OnInit {
  selectedVal:Number = 0;
  data:any[]=[];
  segmentValue = '1';

  constructor(
    private platform:Platform
  ) 
  {
    this.platform.ready().then(()=>{
      this.data = [{id: 1, name:"Burst pipe"}, 
      {id: 2, name:"Cable theft"}, 
      {id: 3, name:"Faulty street light"}, 
      {id: 4, name:"No electricity"}, 
      {id: 5, name:"Pothole"}, 
      {id: 6, name:"Leak at meter"}, 
      {id: 7, name:"Blocked sewer"}, 
      {id: 8, name:"Water leak"}, 
      {id: 9, name:"No water"}, 
      {id: 10, name:"Faulty water meter"},
      {id: 11, name:"Other"}];
    })
   }

   OnChange(event)
   {
    alert("you have selected id = " + event.target.value);
   }

  ngOnInit() {
  }
 
  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
