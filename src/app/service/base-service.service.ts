import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  public post(API_URL: string, data: unknown, options?: any): Observable<any> {
    return this.http.post(API_URL, data, options) as Observable<any>;
  }

  public get(API_URL: string, params?: HttpParams): Observable<any> {
    return this.http.get(API_URL, { params }) as Observable<any>;
  }

  public update(API_URL: string, data: unknown): Observable<any> {
    return this.http.put(API_URL, data);
  }

  public delete(API_URL: string): Observable<unknown> {
    return this.http.delete(API_URL);
  }

}
