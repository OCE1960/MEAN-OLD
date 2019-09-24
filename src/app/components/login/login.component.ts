import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get email() {
    return this.loginForm.get('email');
  }


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['/admin/dashboard']);
  }


}
