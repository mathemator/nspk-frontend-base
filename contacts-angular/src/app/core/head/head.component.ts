import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  total: number | undefined = this.usersService.totalUsers();
  
  constructor(public usersService: UsersService) {
  
  }
  
}
