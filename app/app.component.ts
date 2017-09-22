import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  /* styles: [`
  h1{
    color: white;
  }
  .description{
    font-style: italic;
    color: green;
  }
  `] */
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
firstMediaItem =  {
  id: 1,
  name: "Firebug", 
  medium: "Series",
  category: "Science Fiction",
  year: 2010,
  watchedOn: null ,//1294166565384,
  isFavorite: false
}
onMediaItemDelete(mediaItem){
  console.log(mediaItem);
}

}
