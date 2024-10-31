import { Component, Input, OnInit } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

export interface user {
  id: string,
  name: string,
  likes: number
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users!: user[];

  onDelete(index: number) {
    this.users.splice(index, 1);
  }
}
