import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import { PolygonService } from '../polygon.service';
import { PolylineService } from '../polyline.service';

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
  selector: 'app-map-validation',
  templateUrl: './map-validation.component.html',
  styleUrls: ['./map-validation.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  

  constructor(
    private markerService: MarkerService,
    private polygonService: PolygonService,
    private polylineService: PolylineService
  ) { }
  

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
    
    tiles.addTo(this.map);
  }
  
  ngAfterViewInit(): void {
    this.initMap();
    this.polygonService.makePolygon(this.map);
    this.polylineService.makePolyline(this.map, 0);

    this.markerService.makeMarkers(this.map, 0);
  }

  reloadmap(i:any) {
    this.polylineService.updatePolyline(this.map, i);
    this.markerService.makeMarkers(this.map, i);
  }
}