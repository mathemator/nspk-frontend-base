import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  public users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crone',
        catchPhrase: 'Multi-layered client-server neural net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Leanne Graham',
      username: 'Bret2',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crone',
        catchPhrase: 'Multi-layered client-server neural net',
        bs: 'harness real-time e-markets',
      },
    }
  ];
  
  public getUser( id: number ): any {
     return this.users.find( user => user.id === id );
  }
    
  public addUser( user: any ){
   this.users.push(user)
  }
    
  public updateUser( id: number, user: any ){
    this.users = this.users.map( u => u.id === id ? { ...u, ...user } : { ...u } )
  }
  
  public getUsers() {
    return this.users
  }
    
  public totalUsers() {
    return this.users.length
  }

  constructor() { }
}
