import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoginModel, LoginSuccessModel, RegisterModel } from '@notenic/auth/models/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: LoginModel): Observable<LoginSuccessModel> {
    const url = `${environment.apiUrl}/auth/login`;

    return this.http.post<LoginSuccessModel>(url, loginData);
  }

  register(registerData: RegisterModel): Observable<any> {
    const url = `${environment.apiUrl}/auth/register`;

    return this.http.post<any>(url, registerData);
  }
}
