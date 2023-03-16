import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User_interface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUser():Observable<User_interface[]> {
    return this.http.get<User_interface[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  

}
