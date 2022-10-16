import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { IotComponent } from './iot/iot.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    IotComponent,
    InnovativeComponent,
    DemopipesComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
