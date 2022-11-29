import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makePopup(data: any): string {
    return `` +
      `<style>`
      + `.text {`
      + `float: left;`
      + `width: 75%;`
      + `}`
      + `.image {`
      + `overflow: hidden;`
      + `}`
      + `</style>`
      +`<div> ${ data.content }</div>` +
      `<div class='text'>By: ${ data.user }</div>` +
      `<div class='image' ><img src=${ data.img } height="150px" width="150px"/></div>`;
  }
}