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
    searchTerm : string = ''
    fuzzySearch  : boolean = false;
    DLDistance : number = 0;

    search(){
        if (this.searchTerm && this.searchTerm.length > 0){
            
            let luceneSearch : string = this.searchTerm;

            if (this.fuzzySearch) {
                luceneSearch += '~' + this.DLDistance.toString();
            }

            this._searchService.getResults(luceneSearch).subscribe(results => this.results = results, this.errorReturned);
        }
        
    } 

    constructor(private _searchService: searchService){

    }

    ngOnInit(){
       this.search();
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