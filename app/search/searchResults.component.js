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
var searchService_1 = require('./searchService');
var searchResults = (function () {
    function searchResults(_searchService) {
        this._searchService = _searchService;
        this.title = 'Testing Interpolation';
    }
    searchResults.prototype.ngOnInit = function () {
        this._searchService.getResults('Bahrain').subscribe(this.valueReturned, this.errorReturned);
    };
    searchResults.prototype.valueReturned = function (value) {
        console.log(value);
        this.results = value;
        console.log(this.results);
    };
    searchResults.prototype.errorReturned = function (err) {
        console.log(err);
    };
    searchResults = __decorate([
        core_1.Component({
            selector: 'search-results',
            templateUrl: 'app/search/searchResults.component.html',
            providers: [searchService_1.searchService]
        }), 
        __metadata('design:paramtypes', [searchService_1.searchService])
    ], searchResults);
    return searchResults;
}());
exports.searchResults = searchResults;
//# sourceMappingURL=searchResults.component.js.map