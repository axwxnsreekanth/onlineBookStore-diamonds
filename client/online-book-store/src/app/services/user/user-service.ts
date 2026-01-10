import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private baseUrl = environment.apiBaseUrl;

  private apiUrl = 'http://localhost:8899/api/admin/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      // ✅ Remove ADMIN users
      map(users => users.filter(user => user.role !== 'ADMIN'))
    );
  }
}
