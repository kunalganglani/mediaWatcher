import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems; 

  constructor(private mediaItemService: MediaItemService){
  }

  ngOnInit(){
    this.mediaItems = this.mediaItemService.get();
    // get all the media item data from the service. 
  }

  onMediaItemDelete(mediaItem) { 
     console.log(`Item deleted ${mediaItem}`);
     this.mediaItemService.delete(mediaItem);

  }

}
