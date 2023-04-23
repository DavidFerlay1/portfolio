import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('jwt')) {
      const jwt = JSON.parse(localStorage.getItem('jwt')!);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      })
    }

    return next.handle(request);
  }
}
