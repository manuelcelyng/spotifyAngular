import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log('HOlaaa! 🙌🙌🙌🙌', request)
    
    

    try {
      const token = this.cookieService.get('token');
      let newRequest = request
      newRequest =  request.clone(
        {
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        }
      )
      return next.handle(newRequest)
      
    } catch (error) {
      console.log('🔴🔴🔴 Ojito error 🔴🔴🔴',error)
      return next.handle(request);
    }

  }
}
