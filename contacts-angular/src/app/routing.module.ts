import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { AddFormContactComponent } from './pages/add-contact/add-form-contact/add-form-contact.component';
import { EditContactComponent } from './pages/list-contacts/edit-contact/edit-contact.component';
import { ListContactsComponent } from './pages/list-contacts/list-contacts.component';



const routes: Route[] = [

  { path: '', redirectTo: 'add-contact', pathMatch: 'full' },  
  { path: 'add-contact', component: AddContactComponent },
  { path: 'add-contact/add-form-contact', component: AddFormContactComponent },
  { path: 'list-contacts', component: ListContactsComponent },
  { path: 'list-contacts/edit-contact/:id', component: EditContactComponent },
  { path: '**', component: ListContactsComponent },
  
  ];
  
    
  
  @NgModule({  
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  
  export class RoutingModule {}
  