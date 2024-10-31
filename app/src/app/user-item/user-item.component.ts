import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() data: user = {id: "0", name: "N/A", likes: -1};
  @Output() event = new EventEmitter();

  onDelete() {
    console.log("HERE!");
    this.event.emit();
  }
}
