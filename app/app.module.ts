import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { searchResults } from './search/searchResults.component';




@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule , 
    FormsModule 
   ],
  declarations: [ AppComponent, searchResults ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { 
  
  

}
