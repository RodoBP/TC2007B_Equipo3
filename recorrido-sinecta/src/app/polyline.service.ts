import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class PolylineService {
  path: string = '/assets/data/tec-paths.json';
  
  constructor(private http: HttpClient) { }

  makePolyline(map:any): void{
    this.http.get(this.path).subscribe((res: any) => {
      const coordinates: any = [];
      for (const c of res.features[0].geometry.coordinates[0]){
        coordinates.push([c[1], c[0]]);
      }
      
      console.log(coordinates);
      
      var polyline = L.polyline(coordinates, {color: 'blue'});
      polyline.addTo(map);
   


    });
    

  }

}
