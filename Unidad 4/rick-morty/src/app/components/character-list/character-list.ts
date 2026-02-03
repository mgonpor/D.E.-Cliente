import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {

  public characters: Character[] = [];

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this._characterService.findAll()
      .subscribe(data => {
        console.log(data);
        this.characters = data
      });
  }

}
