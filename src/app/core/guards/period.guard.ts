import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PeriodService } from '../services/period/period.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodGuard implements CanActivate {

  constructor(private router:Router,private periodServ:PeriodService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      //Récupère l'id de la période dans l'url
      var periodId = next.params.id;
      //On check si l'id period existe
      var periodFound:Boolean = this.periodServ.exists(periodId);

      //On redirige si le paramètre saisi ne correspond pas
      if(!periodFound) {
        this.router.navigate(['page-introuvable']);
        return false;
      } else {
        return true;
      }
  }
}
