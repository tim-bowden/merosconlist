"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var searchService = (function () {
    function searchService(_http) {
        this._http = _http;
        this._searchUrl = 'https://merosconlist.search.windows.net/indexes/conlistidx/docs?api-version=2015-02-28&search=';
    }
    searchService.prototype.getResults = function (q) {
        var headers = new http_1.Headers();
        headers.append('api-key', '852613E36B77EB7E14B9D40E4FB46CF9');
        headers.append('Access-Control-Allow-Origin', '*');
        var requestOptions = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._searchUrl + q, requestOptions)
            .map(function (response) { return response.json().value; })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    searchService.prototype.handleError = function (err, caught) {
        console.log(err);
        return caught;
    };
    searchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], searchService);
    return searchService;
}());
exports.searchService = searchService;
//# sourceMappingURL=searchService.js.map