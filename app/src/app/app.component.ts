import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { user } from './user-list/user-list.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInputComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  users!: user[];

  onNewAdd(Value: user) {
    this.userService.addUser(Value);
  }

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
