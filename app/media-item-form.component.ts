import { Component, Inject } from '@angular/core';
// inject here is used to decorate function parameters
import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

// for reactive form
import  { /*FormGroup, FormControl,*/ Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

  form;

  constructor(private formBuilder: FormBuilder, 
  private mediaItemService: MediaItemService, 
  @Inject(lookupListToken) public lookupLists
  // to use the lookupList token passed via module
){
  }
  // ng lifecycle method
  ngOnInit(){
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),// passing default values
      //alphanumeric string, with support for dash, space and /
      name: this.formBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
      // you dont need to call your custom validators, form control will call it. 
    });
      /* this.form = new FormGroup({
      medium: new FormControl('Movies'),// passing default values
      //alphanumeric string, with support for dash, space and /
      name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
      // you dont need to call your custom validators, form control will call it. 
    });*/
  }

  yearValidator(control){
    if(control.value.trim().length ===0){
      return null;
    }
    let year = parseInt(control.value);
    let min = 1900;
    let max = 2100;
    if( year >= min && year<= max){
      return null;
    }else{
      //return { 'year': true }; // returning that year object is valid.. 
      // your can return an object in any format. 
      return {
        'year': {
          min,
          max
        }
      }
    }
  }


  onSubmit(mediaItem){
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }
}
