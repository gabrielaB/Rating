import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  
  onSignin(f : NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.signinUser(email, password);
  }
}
