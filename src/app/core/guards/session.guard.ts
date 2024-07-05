import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {


  constructor(private cookieService:CookieService, private router:Router){}  //TODO: Traemos la cookie, para que el guardian pueda vigilar la cookie

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession(); //TODO (Token), role, admin , user etc.. el guardian valida lo que nosotros necesitemos
  }



  checkCookieSession() : boolean {

    try {
      
      const token = this.cookieService.check('token')
      if(!token) this.router.navigate(['/', 'auth'])
      return token

    } catch (e) {
      console.log('Algo sucedio ?? 🔴', e)
      return false
      
    }
 

  }
  
}
