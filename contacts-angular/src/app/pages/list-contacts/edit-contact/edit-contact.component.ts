import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent implements OnInit {
  public form: FormGroup;
  private userId: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  
  initUserId() {
    this.route.params.subscribe(({ id }) => this.userId = +id );
  }
    

  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required]],
      website: ['', Validators.required],
    });
    this.form.patchValue(this.usersService.getUser(this.userId))
  }

  ngOnInit(): void {
    this.initUserId()
    this.initForm()
  }

  updateUser(){

     this.usersService.updateUser( this.userId, this.form.value )
    
     this.router.navigate(['list-contact'])
    
     }
}
