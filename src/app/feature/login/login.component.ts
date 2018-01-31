import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object = {};

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }
  
  onLogin() {
    if (this.user.username === "rajesh") {
       this.router.navigate(['/']);
    }
  }
}
