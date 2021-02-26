import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Flower} from '../flower';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MlserviceService {

  _URL = 'http://127.0.0.1:5000/predict';
  constructor(private http: HttpClient) { }


  submitValue( flower: Flower): Observable<any> {
   return this.http.post<any>(this._URL, flower )
              .pipe(catchError( this.errorHandler ) );
  }

  errorHandler( error: HttpErrorResponse ): Observable<any>{
    return throwError(error);
  }

}
