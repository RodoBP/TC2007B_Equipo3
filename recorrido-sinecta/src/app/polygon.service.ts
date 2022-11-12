import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class PolygonService {
  polygon: string = '/assets/data/tec-terrain.json';

  constructor(
    private http: HttpClient,
  ) { }

  makePolygon(map: any): void{
    this.http.get(this.polygon).subscribe((res: any) => {
      const coordinates: any = [];
      for (const c of res.features[0].geometry.coordinates[0]){
        coordinates.push([c[1], c[0]]);
      }
      
      console.log(coordinates);
      const area = L.polygon(
        coordinates, 
        {color: 'red', fillColor: 'red', fillOpacity: 0.1}
      )
      
      map.setView(area.getBounds().getCenter(), 17);
      area.addTo(map);
    });
  }
}
