import { Directive, HostBinding, HostListener,  Input} from '@angular/core'
// host element to directive property

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {

    //host binding to target property
    @HostBinding('class.is-favorite') isFavorite = true; //apply class by default
    
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onmouseenter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }

    @Input() set mwFavorite(value){
        this.isFavorite = value;
        // assign class is-favourite based on property passed in component
    }
}