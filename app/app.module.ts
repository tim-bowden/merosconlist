import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { searchService } from './search/searchService';
import { ISearchResult } from './interfaces/ISearchResult'


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule  
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule implements OnInit { 
 
  constructor(private _searchService : searchService){

  }

  ngOnInit(){
      this._searchService.getResults('Bahrain').subscribe(this.valueReturned, this.errorReturned)
  }

  valueReturned(value : ISearchResult[]){
      console.log(value);
  }

  errorReturned(err : any) {

    console.log(err);
  }

}
