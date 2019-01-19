import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PeriodService } from '../services/period/period.service';
import { PERIODS } from '../data/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      //Récupère l'id de la période dans l'url
      var periodId = next.params.id;
      var periodFound:Boolean = false;
      //On check si l'id period existe
      // this.periodService.exists();
      // console.log(periodExists);

      //A remplacer par le service
      PERIODS.forEach(element => {
        if(periodId === element.id) {
          periodFound = true;
        }
      });

      if(!periodFound) {
        this.router.navigate(['page-introuvable']);
        return false;
      } else {
        return true;
      }
  }
}
