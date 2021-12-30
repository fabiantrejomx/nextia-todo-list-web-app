import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URIS } from '../uris';
import {BaseService} from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private baseService: BaseService) { }

  public create(data: any): Observable<any> {
    return this.baseService
        .post(URIS
            .create, data);
  }

  public update(data: any): Observable<any> {
    return this.baseService
        .update(URIS
            .update, data);
  }

  public delete(taskId: string): Observable<any> {
    return this.baseService
        .delete(URIS
            .delete.replace("{taskId}", taskId));
  }

  public getAll(userId: string): Observable<any> {
    return this.baseService
        .get(URIS
            .getAll.replace('{userId}', userId));
  }

  public login(email: string, password: string): Observable<any>{

    return this.baseService.post(URIS.login, {
      email,
      password
    });
  }





 


}
