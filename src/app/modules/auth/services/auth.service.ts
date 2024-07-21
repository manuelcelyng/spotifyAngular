import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL= environment.api

  constructor(private http:HttpClient) {}

  sendCredentials(email:string, password:string):Observable<any>{  //TODO por defecto un metodo es publico
    
    const body = {
      email,
      password
    }
    
    return this.http.post(
      `${this.URL}/auth/login`,
      body)
      // .pipe(
      //   tap( (responseOk:any) => {
      //     console.log('Session iniciada correcta');
      //     const {tokenSession , data} =  responseOk;
      //     this.cookie.set('token_service', tokenSession, 4, '/')
      //   }
      // )
      // )
  }
}
