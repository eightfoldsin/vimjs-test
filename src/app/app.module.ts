import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { VimeModule } from '@vime/angular';
import { TapSidesToSeekComponent } from './tap-sides-to-seek/tap-sides-to-seek.component';


@NgModule({
  declarations: [
    AppComponent,
    TapSidesToSeekComponent
  ],
  imports: [
    BrowserModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
