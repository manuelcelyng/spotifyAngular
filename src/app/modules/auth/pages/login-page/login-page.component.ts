import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin:FormGroup =  new FormGroup({}); //TODO : formulario que no tiene inputs

  errorSession: boolean =  false


  constructor(private asAuthService:AuthService, private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('' ,
          [
            Validators.required,
            Validators.email
          ]
        ),
        password:new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]
        )
      }
  )
  
  }


  sendLogin(): void {
    const {email,password} = this.formLogin.value
    // console.log('👉👉', body)
    this.asAuthService.sendCredentials(email, password).subscribe(
      //TODO. 200<400 RESpuestas correctas
      responseOk => { //TODO: Responde cuando la peticion  es correcta y las credenciales son correctas.
        console.log('Session iniciada correcta');
        const {tokenSession,data} =  responseOk
        this.cookie.set('token', tokenSession, 4, '/')
        this.router.navigate(['/', 'tracks'])
      },
      err  => {  //TODO: error 400>=
        this.errorSession = true;
        console.log('Ocurrio error con tu email o password',err)
      }

    )

  }

}
