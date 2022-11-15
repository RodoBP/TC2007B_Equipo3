import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';
import { PolylineService } from './polyline.service';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PathComponent } from './path/path.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PathComponent
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
