 import { Injectable } from '@angular/core';
 import { Http, Response } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

 import { ISearchResult } from '../interfaces/ISearchResult'

 @Injectable()
 export class searchService {

     private _searchUrl : string = 'https://merosconlist.search.windows.net/indexes/conlistidx/docs?api-version=2015-02-28&search=';

     constructor( private _http: Http){

     }

     getResults(q : string) : ISearchResult[] {
            
            return [];

     }

 }