import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_interface } from '../interfaces/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  get():Observable<User_interface>{
    return this.http.get<User_interface>(this.API_URL)
    .pipe(catchError(this.errorHandeller))
  }

  delateUser(id: number):Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

 // post request
 creatStudent(student:User_interface):Observable<User_interface> {
  return this.http.post<User_interface>(`${this.API_URL}`, student)
  .pipe(catchError(this.errorHandeller))
}


  errorHandeller(error: HttpErrorResponse){
    return throwError(() => error)
  }

}
