import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss',
})
export class HeadComponent implements OnInit {
  public total: number;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.total = this.usersService.totalUsers();
    // }, 1000);
  }
}
