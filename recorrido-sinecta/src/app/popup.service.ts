import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>Population: ${ data.population }</div>` +
      `<img src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" height="150px" width="150px"/>`;
  }
}