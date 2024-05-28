import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrl: './add-form-contact.component.scss'
})
export class AddFormContactComponent {
  @Output() namePage: EventEmitter<string> = new EventEmitter();
  
  
  constructor() {
  
  }
  
  ngOnInit() {
    this.namePage.emit('APP_EDIT_CONTACT');  
  }
  
  public openPage(namePage: string) {
    this.namePage.emit(namePage);
  }
}
