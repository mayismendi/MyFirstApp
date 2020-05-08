import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SidescrollComponent } from './sidescroll/sidescroll.component';
import { ScrollabletextareasComponent } from './scrollabletextareas/scrollabletextareas.component';
import { FirstscrollComponent } from './firstscroll/firstscroll.component';
import { SecondscrollComponent } from './secondscroll/secondscroll.component';
import { ThirdscrollComponent } from './thirdscroll/thirdscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidescrollComponent,
    ScrollabletextareasComponent,
    FirstscrollComponent,
    SecondscrollComponent,
    ThirdscrollComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
