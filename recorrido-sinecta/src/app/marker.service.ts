import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './popup.service';
import axios from 'axios';

var markersLayer = new L.LayerGroup();

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  markers: string = '/assets/data/tec-predio.json';
  constructor(
    private http: HttpClient,
    private PopUpService: PopUpService
  ) { }

  makeMarkers(map:any, path:number): void {
    markersLayer.clearLayers();
    axios.get(this.markers).then((res: any) => {
      for (const c of res.data.paths[path].points) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.PopUpService.makePopup(c.properties), {
          closeButton: false,
          minWidth: 400
          });
          markersLayer.addLayer(marker);
          markersLayer.addTo(map);
      }
    });
  }
}