import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  markers: string = '/assets/data/tec-paths.geojson';
  constructor(
    private http: HttpClient,
    private PopUpService: PopUpService
  ) { }

  makeMarkers(map:any): void {
    this.http.get(this.markers).subscribe((res: any) => {
      for (const c of res.points) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.PopUpService.makePopup(c.properties), {
          closeButton: false,
          minWidth: 320
          });
        marker.addTo(map);
      }
    });
  }
}