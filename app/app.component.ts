import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Con List</h1>
  
  <search-results></search-results>  
  `,  
  
})
export class AppComponent { 
  
  name = 'Angular'; 

  constructor(){
    
  }

}
