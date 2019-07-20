import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstNameFormControl: FormControl;
  lastNamFormControl: FormControl;
  usernameFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.firstNameFormControl = this.fb.control('', [Validators.required, Validators.maxLength(50)]);
    this.lastNamFormControl = this.fb.control('', [Validators.required, Validators.maxLength(50)]);
    this.usernameFormControl = this.fb.control('', [Validators.required, Validators.maxLength(30)]);
    this.emailFormControl = this.fb.control('', [Validators.required, Validators.maxLength(250), Validators.email]);
    this.passwordFormControl = this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]);

    this.registerForm = this.fb.group({
      firstName: this.firstNameFormControl,
      lastName: this.lastNamFormControl,
      username: this.usernameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }
}

