// custom pipe implementation. 

import { Pipe } from '@angular/core';
@Pipe({
    name: 'categoryList',  // name that will be used in template
    pure: true
    //pipe is stateful or stateful
    // pure means pipe takes data and returns data without side effects
    // true by default or stateless by default
})

export class CategoryListPipe{
    transform(mediaItems){
        // values after the : will be parameters to this function
        var categories = [];
        mediaItems.forEach(mediaItem => {
          if (categories.indexOf(mediaItem.category) <= -1) {
            categories.push(mediaItem.category);
          }
        });
        return categories.join(' ');
        
    }
}