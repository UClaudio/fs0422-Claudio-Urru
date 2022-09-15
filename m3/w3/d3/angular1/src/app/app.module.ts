import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeComponent } from './pizze/pizze/pizze.component';
import { PizzeListComponent } from './pizze/pizze-list/pizze-list.component';
import { PizzeItemComponent } from './pizze/pizze-item/pizze-item.component';
import { PizzeDetailComponent } from './pizze/pizze-detail/pizze-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeComponent,
    PizzeListComponent,
    PizzeItemComponent,
    PizzeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
