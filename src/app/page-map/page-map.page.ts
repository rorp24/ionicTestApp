import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.page.html',
  styleUrls: ['./page-map.page.scss'],
})
export class PageMapPage implements OnInit {
	map:L.Map;
	constructor() { }

	ngOnInit() {
		this.map = new L.Map('map').locate({setView: true, maxZoom: 16});

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		   // tslint:disable-next-line
		  attribution: '&copy; OpenStreetMap',
		  maxZoom: 18
		}).addTo(this.map);
		this.map.on('locationfound', (e)=> {this.onLocationFound(e)});
		this.map.on('locationerror', (e)=> {this.onLocationError(e)});
	}
  	
  	onLocationFound(e) {
    console.log("location trouvée");
    var radius = 1000;
    L.circle(e.latlng, radius).addTo(this.map);
	}
	
	onLocationError(e) {
    alert(e.message);
	}	
	
}
