import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';
import { PolylineService } from './polyline.service';

import { AppComponent } from './app.component';
import { ValidationComponent } from './map-validation/validation/validation.component';
import { MapComponent } from './map-validation/map-validation.component';

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
