import { Injectable } from '@angular/core';
import { user } from './user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: user[] = [];

  getUsers(): user[] {
    return this.users;
  }
  addUser(User: user) {
    this.users.push(User);
  }

  constructor() {
    this.users = [
      {id: "20", name: "Davit", likes: 20},
      {id: "25", name: "Davit", likes: 25},
      {id: "35", name: "Davit", likes: 35},
      {id: "45", name: "Davit", likes: 45},
    ];
   }
}
