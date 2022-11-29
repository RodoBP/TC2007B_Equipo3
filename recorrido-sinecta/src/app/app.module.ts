import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';
import { PolylineService } from './polyline.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ValidationComponent } from './validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopUpService,
    PolylineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
