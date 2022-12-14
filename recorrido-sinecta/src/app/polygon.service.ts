import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PolygonService {
  polygon: string = '/assets/data/tec-predio.json';

  constructor(
  ) { }

  makePolygon(map: any): void{
    axios.get(this.polygon).then((res: any) => {
      const coordinates: any = [];
      for (const c of res.data.features[0].geometry.coordinates[0]){
        coordinates.push([c[1], c[0]]);
      }
      
      const area = L.polygon(
        coordinates, 
        {color: 'red', fillColor: 'red', fillOpacity: 0.1}
      )
      
      map.setView(area.getBounds().getCenter(), 17);
      area.addTo(map);
    });
  }
}
