import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { server } from 'src/app/app.config';
import { User_interface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private server = server;

  readonly defaultImage = 'https://robohash.org/';

  constructor(private http : HttpClient) { }

  getUser():Observable<User_interface[]> {
    return this.http.get<User_interface[]>(`${this.server}/users`)
    .pipe(
      map(users => users.map(user => ({
        ...user,
        image: `${this.defaultImage}/${user.username.toLocaleUpperCase()}`
      })))
    )
  }

  // post request
  createUser(user:User_interface):Observable<User_interface> {
    return this.http.post<User_interface>(`${this.server}/users`, user)
    .pipe(catchError(this.errorHandeller))
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

  errorHandeller(error: HttpErrorResponse){
    return throwError(() => error)
  }

}
