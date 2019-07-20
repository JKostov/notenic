import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoginModel, RegisterModel } from '@notenic/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: LoginModel): Observable<any> {
    const url = `${environment.apiUrl}/login`;

    return this.http.post<any>(url, loginData);
  }

  register(registerData: RegisterModel): Observable<any> {
    const url = `${environment.apiUrl}/register`;

    return this.http.post<any>(url, registerData);
  }
}
