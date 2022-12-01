import { Injectable } from '@angular/core';
import { popup } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makePopup(data: any): string {
    
    var pop = ''
      +`<style>`
      + `.text {`
      + `float: left;`
      + `width: 60%;`
      + `height: 100%;`
      + `}`
      + `.image {`
      + `width: 100%;`
      + `}`
      + `.popup{`
      + `width: 100%;`
      + `height: 150px;`
      + `}`
      + `</style>`
      + `<div class="popup">` 
      +`<div class='text'> <p>${ data.content }</p><p>By: ${ data.user }</p></div>`
      
      if(data.img != ""){
        pop = pop +`<div class='image' ><img src=${ data.img } height="150px" width="150px"/></div>`;
      }
      pop = pop +`</div>`;
      return pop;
  }
}