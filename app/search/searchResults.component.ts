import { Component } from '@angular/core';
import { ISearchResult } from '../interfaces/ISearchResult';
import { Observable } from 'rxjs/Observable';

@Component({
    selector : 'search-result',
    template : `<h1>Hello</h1>`

})
export class searchResults{

    results : ISearchResult[];

    constructor(private _searchResults : Observable<ISearchResult[]>){

    }

}