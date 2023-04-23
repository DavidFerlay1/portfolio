import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private baseUrl = 'send-mail';

  constructor(private http: HttpClient) { }

  sendMail(form: {username: string, subject: string, message: string}) {
    return this.http.post(this.baseUrl, form);
  }

}
