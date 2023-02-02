import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './components/header/header.component';
import { TotalComponent } from './components/total/total.component';
import { AppRoutingModule } from './app-routing.module';
import { AdditemComponent } from './components/additem/additem.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemsComponent,
    HeaderComponent,
    TotalComponent,
    AdditemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
