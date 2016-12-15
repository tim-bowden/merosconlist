 import { Injectable } from '@angular/core';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

 import { ISearchResult } from '../interfaces/ISearchResult'

 @Injectable()
 export class searchService {

     private _searchUrl : string = 'https://merosconlist.search.windows.net/indexes/conlistidx/docs?api-version=2015-02-28&search=';

     constructor( private _http: Http){

     }

     public getResults(q : string) : Observable<ISearchResult[]> {
            
            let headers : Headers = new Headers();

            headers.append('api-key', '852613E36B77EB7E14B9D40E4FB46CF9');
            headers.append('Access-Control-Allow-Origin', '*');

            let requestOptions = new RequestOptions( {headers : headers} );

            let resp : Observable<ISearchResult[]> = this._http.get(this._searchUrl + q, requestOptions)
            .map((response: Response) => <ISearchResult[]>response.json().value);

            return resp;
               

     }

 }