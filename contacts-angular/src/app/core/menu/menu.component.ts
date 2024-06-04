import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public total: number;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.total = this.usersService.totalUsers();
    // }, 1000);
  }
}

