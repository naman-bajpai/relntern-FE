import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InternService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091';
  public registerIntern(interndetails: any) {
    return this.http.post(this.API + '/registerIntern', interndetails);
  }

  public getInterns() {
    return this.http.get(this.API + '/getInterns');
  }

  public deleteIntern(id: any) {
    return this.http.delete(this.API + '/deleteIntern?id=' + id);
  }
  
  public registerMentor(mentordetails: any) {
    return this.http.post(this.API + '/registerMentor', mentordetails);
  }
}
