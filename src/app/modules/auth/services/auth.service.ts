import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  sendCredentials(email:string, password:string):void{  //TODO por defecto un metodo es publico
    console.log('🆗🆗km, ', email, password)
  }
}
