import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user = {}; // Data model
  constructor() { }

  ngOnInit() {
    // Form model
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl()  // can also pass defaults new FormControl("somevalue")
    });
  }

  save() {
    console.log("form: ",JSON.stringify(this.registerForm.value));

  }
}
