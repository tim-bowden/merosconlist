import { Component, OnInit } from '@angular/core';
import { searchService } from './search/searchService';

import { ISearchResult } from './interfaces/ISearchResult'
import { searchResults } from './search/searchResults.component'


@Component({
  selector: 'my-app',
  template: `<h1>Con List</h1>
  <input type='text' id='searchConList' />
  <search-results></search-results>  
  `,
  providers: [searchService]
})
export class AppComponent implements OnInit  { 
  
  name = 'Angular'; 

  constructor(private _searchService : searchService ){
    
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
