import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import axios from 'axios';

var marker1: any;
var marker2: any;
var polyline: any;

@Injectable({
  providedIn: 'root'
})
export class PolylineService {
  path: string = '/assets/data/tec-predio.json';
  
  constructor(private http: HttpClient) { }

  

  makeStartIcon(map:any, path:number): void{
    axios.get(this.path).then((res: any) => {
      
      const svgIcon = L.divIcon({
        html: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="#00b341" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
</svg>`,
        className: "",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      }); 
      
      //L.marker( [29.171134011489812, -110.91209942941005], { icon: svgIcon }).addTo(map);
      marker1 = L.marker( [(res.data.paths[path].features[0].geometry.coordinates.at(0)).at(1), (res.data.paths[0].features[0].geometry.coordinates.at(0)).at(0)], { icon: svgIcon });
      marker1.addTo(map);
    });  
  }

  makeFinishIcon(map:any, path:number): void{
    axios.get(this.path).then((res: any) => {
   
      
      const svgIcon = L.divIcon({
        html: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="#ff4500" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
</svg>`,
        className: "",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      }); 
      
      marker2 = L.marker( [(res.data.paths[path].features[0].geometry.coordinates.at(-1)).at(1), (res.data.paths[0].features[0].geometry.coordinates.at(-1)).at(0)], { icon: svgIcon });
      marker2.addTo(map);
    });  
  }

  makePolyline(map:any, path:number): void{
    this.makeStartIcon(map, path);
    this.makeFinishIcon(map, path);
    axios.get(this.path).then((res: any) => {
      const coordinates: any = [];
      for (const c of res.data.paths[path].features[0].geometry.coordinates){
        coordinates.push([c[1], c[0]]);
      }
      
      polyline = L.polyline(coordinates, {color: 'black'});
      polyline.addTo(map);

    });  
  }


  updateStartIcon(map:any, path:number): void{
    map.removeLayer(marker1);
    axios.get(this.path).then((res: any) => {
      
      const svgIcon = L.divIcon({
        html: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="#00b341" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
        </svg>`,
        className: "",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      }); 
      
      //L.marker( [29.171134011489812, -110.91209942941005], { icon: svgIcon }).addTo(map);
      marker1 = L.marker( [(res.data.paths[path].features[0].geometry.coordinates.at(0)).at(1), (res.data.paths[0].features[0].geometry.coordinates.at(0)).at(0)], { icon: svgIcon });
      marker1.addTo(map);
    });  
  }

  updateFinishIcon(map:any, path:number): void{
    map.removeLayer(marker2);
    axios.get(this.path).then((res: any) => {
   
      
      const svgIcon = L.divIcon({
        html: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-3" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="#ff4500" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
        </svg>`,
        className: "",
        iconSize: [24, 40],
        iconAnchor: [12, 40],
      }); 
      
      marker2 = L.marker( [(res.data.paths[path].features[0].geometry.coordinates.at(-1)).at(1), (res.data.paths[0].features[0].geometry.coordinates.at(-1)).at(0)], { icon: svgIcon });
      marker2.addTo(map);
    });  
  }


  updatePolyline(map:any, path:number): void{
    map.removeLayer(polyline);
    this.updateStartIcon(map, path);
    this.updateFinishIcon(map, path);
    axios.get(this.path).then((res: any) => {
      const coordinates: any = [];
      for (const c of res.data.paths[path].features[0].geometry.coordinates){
        coordinates.push([c[1], c[0]]);
      }
      
      polyline = L.polyline(coordinates, {color: 'black'});
      polyline.addTo(map);

    });  
  }

}
