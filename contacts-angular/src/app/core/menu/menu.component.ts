import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  total: number | undefined = this.usersService.totalUsers();
  @Output() namePage: EventEmitter<string> = new EventEmitter();
  
  
  constructor(public usersService: UsersService) {
  
  }
  
  ngOnInit() {
    this.namePage.emit('ADD_CONTACT');  
  }
  
  public openPage(namePage: string) {
    this.namePage.emit(namePage);
  }
}
