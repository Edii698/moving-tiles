import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopPortionComponent } from './top-portion/top-portion.component';
import { BottomPortionComponent } from './bottom-portion/bottom-portion.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPortionComponent,
    BottomPortionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
