import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  register(userData: any): Observable<any> {
    return this.http.post('/auth/register', userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post('/auth/login', credentials);
  }
}
