import { Component } from '@angular/core';
import { searchService } from './search/searchService';

@Component({
  selector: 'my-app',
  template: `<h1>Con List</h1>
  <input type='text' id='searchConList' />
  
  `,
  providers: [searchService]
})
export class AppComponent  { name = 'Angular'; }
