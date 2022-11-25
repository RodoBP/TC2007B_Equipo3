import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';
import { PolylineService } from './polyline.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MenuRecorridosComponent } from './menu-recorridos/menu-recorridos.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuRecorridosComponent
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
