import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() onOurSubmit = new EventEmitter();

  dataOutput = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    likes: new FormControl('')
  })

  onSubmit() {
    if (!this.dataOutput.valid) {
      console.log("ERROR!");
      return;
    }
    console.log("HERE!!!@24")
    this.onOurSubmit.emit(this.dataOutput.value);
  }
}
