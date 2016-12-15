import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { searchResults } from './search/searchResults.component'



@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule  
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent, searchResults ]
})
export class AppModule { 
  
  

}
