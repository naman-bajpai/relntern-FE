import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8080';
  public registerIntern(interndetails: any) {
    return this.http.post(this.API + '/registerIntern', interndetails);
  }
}
 