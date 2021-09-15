import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Idata } from './data-table';
import { Observable } from 'rxjs';
// //import 'rxjs-compat/add/operator/catch';
// import 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  
  getData(): Observable<Idata[]>{
    return this.http.get<Idata[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Sever Error");
    
  }

}
