import { Component, OnInit } from '@angular/core';
import { ISearchResult } from '../interfaces/ISearchResult';
import { Observable } from 'rxjs/Observable';
import { searchService } from './searchService';

@Component({
    selector : 'search-results',
    templateUrl : 'app/search/searchResults.component.html',
    providers : [ searchService ]

})
export class searchResults implements OnInit{

    results : ISearchResult[];
    title : string = 'Testing Interpolation' 

    constructor(private _searchService: searchService){

    }

    ngOnInit(){
       this._searchService.getResults('Bahrain').subscribe(this.valueReturned, this.errorReturned)
    }

    valueReturned(value : ISearchResult[]){
        console.log(value);
        this.results =value  ;
        console.log(this.results);
    }

    errorReturned(err : any) {

        console.log(err);
    }

    

}