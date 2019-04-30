import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  private character:Character;

  constructor(
    private route:ActivatedRoute,
    private characterService:CharacterService
  ) { }

  ngOnInit() {
    let characterId:string = this.route.snapshot.paramMap.get('id');
    this.character = this.characterService.getOne(characterId);
  }

}
