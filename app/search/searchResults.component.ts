import { Component } from '@angular/core';
import { ISearchResult } from '../interfaces/ISearchResult';
import { Observable } from 'rxjs/Observable';

@Component({
    selector : 'search-results',
    template : `<h1>Hello</h1>`

})
export class searchResults{

    results : ISearchResult[];

    

}