import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;
  etoiles:Array<number>;

  constructor() { }

  ngOnInit() {
    this.etoiles = Array(this.character.prestige).fill(1);
  }

}
