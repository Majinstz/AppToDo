import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../shared/todo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  apiURL = 'https://60d0e14e7de0b20017109b95.mockapi.io';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getTodos(): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/todos')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getTodo(id): Observable<Todo> {
    return this.http.get<Todo>(this.apiURL + '/todos/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  createTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL + '/todos', JSON.stringify(todo), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  updateTodo(id, todo): Observable<Todo> {
    return this.http.put<Todo>(this.apiURL + '/todos/' + id, JSON.stringify(todo), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteTodo(id){
    return this.http.delete<Todo>(this.apiURL + '/todos/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}