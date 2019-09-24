import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  requestForm: FormGroup;
  get email() {
    return this.requestForm.get('email');
  }


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  login() {
    console.log(this.requestForm.value);
    this.router.navigate(['/admin/dashboard']);
  }

}
