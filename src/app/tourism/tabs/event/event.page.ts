import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  item: any;
  trips = [      
    { 
      id: 1, 
      category: 'Camp', 
      image: 'assets/events/events01.jpg',  
      price:'R150.00',
      date: '16 June 2022', 
      time: '12:00pm', 
      location:'Arabas Stadium,Kimberley',
      description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/events/event01.jpg',
        'assets/events/event03.jpg',        
        'assets/events/event04.jpg',
        'assets/events/event02.jpg',
      ]
    },
    { id: 2, 
    category: 'Mountains', 
    image: 'assets/events/events03.jpg', 
    price:'R150.00',
      date: '16 June 2022', 
      time: '12:00pm', 
      location:'Arabas Stadium,Kimberley',
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/events/event03.jpg',
      'assets/events/event02.jpg',        
      'assets/events/event01.jpg',
      'assets/events/event04.jpg',
    ] },
    { id: 3, 
    category: 'Treking', 
    image: 'assets/events/events02.jpg', 
    price:'R150.00',
    date: '16 June 2022', 
    time: '12:00pm', 
    location:'Arabas Stadium,Kimberley', 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/events/event02.jpg',
        'assets/events/event04.jpg',        
        'assets/events/event03.jpg',
        'assets/events/event01.jpg'
    ] },
    { id: 4,
    category: 'Lake', 
    image: 'assets/events/events04.jpg', 
    price:'R150.00',
    date: '16 June 2022', 
    time: '12:00pm', 
    location:'Arabas Stadium,Kimberley',
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/events/event04.jpg',
      'assets/events/event01.jpg',        
      'assets/events/event03.jpg',
      'assets/events/event02.jpg',
    ] },
  ];

  currentImage: string;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if(!id) {
      this.navCtrl.back();
      return;
    } 
    this.item = this.trips.find(x => x.id == parseInt(id));
    this.currentImage = this.item.images[0];
  }

  changeImage(image) {
    this.currentImage = image;
  }

}
