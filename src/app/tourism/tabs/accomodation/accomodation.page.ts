import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.page.html',
  styleUrls: ['./accomodation.page.scss'],
})
export class AccomodationPage implements OnInit {

  segmentValue = '1';
  item: any;
  trips = [      
    { 
      id: 1, 
      name: 'Banjir Kanal', 
      category: 'Camp', 
      image: 'assets/images/banjir.jpg', 
      price: '12K', 
      rating: 4.5, 
      duration: 5, 
      description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/images/banjir.jpg',
        'assets/images/swissalps.jpg',        
        'assets/images/lake.jpg'
      ]
    },
    { id: 2, name: 'Swiss Alps', category: 'Mountains', image: 'assets/images/swissalps.jpg', price: '20K', 
    rating: 4.8, 
    duration: 6, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/images/swissalps.jpg',        
      'assets/images/banjir.jpg',
      'assets/images/lake.jpg'
    ] },
    { id: 3, name: 'Adi Kailash', category: 'Treking', image: 'assets/images/kailash.jpg', price: '5K', 
    rating: 4.9, 
    duration: 10, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/images/kailash.jpg',
      'assets/images/swissalps.jpg',        
      'assets/images/banjir.jpg',
    ] },
    { id: 4, name: 'Tarsar Lake', category: 'Lake', image: 'assets/images/tarsar.jpg', price: '15K', 
    rating: 4.2, 
    duration: 3, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/images/tarsar.jpg',
      'assets/images/swissalps.jpg',        
      'assets/images/lake.jpg'
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

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  changeImage(image) {
    this.currentImage = image;
  }

}
