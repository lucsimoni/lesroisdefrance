import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterService } from '../services/character/character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterGuard implements CanActivate {

  constructor(private router:Router, private characterService:CharacterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      //Récupère l'id du character dans l'url
      var characterId:string = next.params.id;
      //Check si l'id existe
      var characterFound:boolean = this.characterService.exists(characterId);

      console.log("exist ?",characterFound);

    return true;
  }
}
