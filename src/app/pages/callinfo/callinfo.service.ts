import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Config} from '../common/utils/Config';
import {Observable, of, throwError} from 'rxjs';
import {BaseResponse, CallInfoItem, CallInfoRequest, PageResponse, PageResponseNone} from '../common/entity/call-info-item';
import {Constants} from '../../../config/Constants';
import {catchError, tap} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"})
};


@Injectable({
  providedIn: 'root'
})
export class CallinfoService {


  constructor(private http:HttpClient) { }

  configUrl = 'assets/json/config.json';


  private handleError1(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getConfig(){
    return this.http.get<Config>(this.configUrl);
  };

  /**
   * 按天获取数据
   * @param request
   */
  getCallInfoByDay(request:CallInfoRequest):Observable<PageResponse<CallInfoItem>>{
    return this.getCallInfoByUrl(Constants.URL_CALL_INFO_GET_BY_DAY,request);
  }

  /**
   * 按月获取数据
   * @param request
   */
  getCallInfoByMonth(request:CallInfoRequest):Observable<PageResponse<CallInfoItem>>{
    return this.getCallInfoByUrl(Constants.URL_CALL_INFO_GET_BY_MONTH,request);
  }

  /**
   * 按年获取数据
   * @param request
   */
  getCallInfoByYear(request:CallInfoRequest):Observable<PageResponse<CallInfoItem>>{
    return this.getCallInfoByUrl(Constants.URL_CALL_INFO_GET_BY_YEAR,request);
  }

  /**
   * 按天获取数据
   * @param request
   */
  getCallInfoByUrl(url:string,request:CallInfoRequest):Observable<PageResponse<CallInfoItem>>{
    let options= {
      "telephone":request.telephone,
      "year":request.year.toString(),
      "month":request.month.toString(),
      "day":request.day.toString()
    };

    return  this.http.get<PageResponse<CallInfoItem>>(url,
        {params:options})
        .pipe(
            // tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<PageResponse<CallInfoItem>>('getCallInfoByDay', new PageResponseNone()))
        );
  }
}
