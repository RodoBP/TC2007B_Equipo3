import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  

  constructor(private markerService: MarkerService) { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 29.170121381348366, -110.91119347821426 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 24,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const coords: any = [
      [29.169078321915375, -110.91216967085387],
      [29.169414793858298, -110.91102649789431],
      [29.16937101839368, -110.90934167752444],
      [29.17084718316487, -110.90929018812271],
      [29.171356717345038, -110.91306607758207],
      [29.170509990037182, -110.91343508496108]
  
    ];

    const area = L.polygon(
      coords, 
      {color: 'blue', fillColor: 'blue', fillOpacity: 0.1}
    ).addTo(this.map);

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
}