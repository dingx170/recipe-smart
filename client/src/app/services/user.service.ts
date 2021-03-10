import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { IUser } from '../interfaces/IUser'
import { catchError, map, tap } from 'rxjs/operators';
import { ShareDataService} from '../services/share-data.service'
import { SimpleResponse} from '../interfaces/ISimpleResponse'
import { NormalResponse } from '../interfaces/INormalResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_api:string = "http://localhost:8080"
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient, private shared_service: ShareDataService) {}

  /**
   * Take the id from the delegating component
   * create a http get request with the id as param
   * send it to the backend and wait for the response in a async way
   * @param id
   */
  getUserById(id: number): Observable<NormalResponse>{
    const url = `${this.base_api}/user/${id}`;
    return this.http.get<NormalResponse>(url).pipe(
      catchError(this.handleError<NormalResponse>(`getUserById id = ${id}`))
    );
  }

  /**
   * Update User by given id
   * @param user
   * @param id
   */
  updateUser(user: IUser, id: number): Observable<SimpleResponse>{
    let url:string = `${this.base_api}/user/${id}`;
    return this.http.put<SimpleResponse>(url, user, this.httpOptions).pipe(
      catchError(this.handleError<SimpleResponse>('updated user'))
    );
  }

  /**
   * Add user with the given User object from the delegating component
   * @param user
   */
  addUser(user: IUser): Observable<NormalResponse>{

    let url: string = this.base_api + "/user";
    return this.http.post<NormalResponse>(url, user, this.httpOptions).pipe(
      catchError(this.handleError<NormalResponse>('add user operation failed'))
    );
  }

  /**
   * Validate if given email already occupied in database
   * @param email
   */
  validateNameEmail(email: string, name: string): Observable<boolean>{
    // let url:string = `${this.base_api}/validation/?name=${name}&?email=${email}`;
    let url: string = this.base_api + "/validation/?name=" + name + "&?email=" + email;
    return this.http.get<boolean>(url).pipe(
      catchError(this.handleError<boolean>(`check username and email username = ${name} email = ${email}`))
    );
  }


  /**
   * Handle the error and return a human readable message to delegating component
   * Return an empty IUser object to keep the app running.
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

