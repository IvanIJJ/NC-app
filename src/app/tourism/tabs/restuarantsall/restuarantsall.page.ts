import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restuarantsall',
  templateUrl: './restuarantsall.page.html',
  styleUrls: ['./restuarantsall.page.scss'],
})
export class RestuarantsallPage implements OnInit {
  categories = [];
	highlights = [];
	featured = [];

  catSlideOpts = {
		slidesPerView: 3.5,
		spaceBetween: 10,
		slidesOffsetBefore: 11,
		freeMode: true
	};

	highlightSlideOpts = {
		slidesPerView: 1.05,
		spaceBetween: 10,
		centeredSlides: true,
		loop: true
	};

	featuredSlideOpts = {
		slidesPerView: 1.2,
		spaceBetween: 10,
		freeMode: true
	};

	showLocationDetail = false;



  constructor(private http: HttpClient) { }

  ngOnInit() {
		this.http
			.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
			.subscribe((res: any) => {
				this.categories = res.categories;
				this.highlights = res.highlights;
				this.featured = res.featured;
			});
	}

	// Dummy refresher function
	doRefresh(event) {
		setTimeout(() => {
			event.target.complete();
		}, 2000);
	}

	// show or hide a location string later
	onScroll(ev) {
		const offset = ev.detail.scrollTop;
		this.showLocationDetail = offset > 40;
	}
 
}
