import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent} from './media-item-list.component';
import { MediaItemFormComponent} from './media-item-form.component';
import { FavoriteDirective} from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

// my service to opertate on media iteams
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';

/* all constants kept in provider
const lookupLists = {
  mediums: ['Movies', 'Series']
} */

@NgModule({
  imports: [
    // things u want to call on app start
    BrowserModule, 
    ReactiveFormsModule, // used for model driven forms
    // FormsModule // used for template forms
    //contains all forms directive and constructs 
  ],
  declarations: [
    // add all componets directives and pipes here
    AppComponent, 
    MediaItemComponent, 
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe

  ],
  providers: [ //things here will be injected to root
    MediaItemService, 

    // providing contant values defined above to component
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}