import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
  @Input() mediaItem;
// to make this a property in html of wherever
//tag is called 
// if @Input('mediaItemToWatch') mediaItem; then here mediaItemtoWatch is property name in external component
// and mediaItem is the property name in its own componenet
//alias is not recommended way

  @Output() delete = new EventEmitter();


  onDelete(){
    this.delete.emit(this.mediaItem);// when eveer
    //item get deleted, pass the object that was deleted to whoever deleted it
    console.log("hie .. element deleted");
  }

 /*  name = 'My Redmemption';
  wasWatched (){
    return true;
  } */

}
