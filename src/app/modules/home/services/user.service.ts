import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/app/app.config';
import { User_interface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private server = server;

  constructor(private http : HttpClient) { }

  getUser():Observable<User_interface[]> {
    return this.http.get<User_interface[]>(`${this.server}/users`);
  }

  // post request
  createUser(user:User_interface):Observable<User_interface> {
    return this.http.post<User_interface>(`${this.server}/users`, user);
  }

  // put request
  updateUser(user:User_interface):Observable<User_interface>{
    return this.http.put<User_interface>(`${this.server}/users/${user.id}`, user);
  }

  // patc request
  patcUser(user:User_interface):Observable<User_interface>{
    return this.http.patch<User_interface>(`${this.server}/users/${user.id}`, user);
  }

  // delate request
  delateUser(id: number):Observable<void> {
    return this.http.delete<void>(`${this.server}/users/${id}`);
  }

}
