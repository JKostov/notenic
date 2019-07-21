import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { INotenicState } from '@notenic/store/notenic.state';
import { Store } from '@ngrx/store';
import { InitLogin } from '@notenic/store/notenic.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;

  constructor(private fb: FormBuilder, private store: Store<INotenicState>) { }

  ngOnInit(): void {
    this.emailFormControl = this.fb.control('', [Validators.required, Validators.email]);
    this.passwordFormControl = this.fb.control('', [Validators.required]);

    this.loginForm = this.fb.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  onLoginClick(): void {
    this.store.dispatch(new InitLogin());
  }
}
