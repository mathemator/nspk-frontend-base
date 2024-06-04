import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrl: './add-form-contact.component.scss',
})
export class AddFormContactComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required]],
      website: ['', Validators.required],
    });
    
  }

  ngOnInit(): void {
    this.initForm()
  }

  addContact() {
    let currentUser = { ...this.form.value };
    currentUser.id = +this.usersService.totalUsers + 1
    this.usersService.addUser(currentUser);
    this.router.navigate(['list-contacts']);
  }
}
