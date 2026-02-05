import { Component, Signal } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-character-list',
  imports: [RouterLink],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {

  public characters!: Signal<Character[]>;

  constructor(private _characterService: CharacterService) {
    this.characters = toSignal(this._characterService.findAll(), {initialValue: []});
   }

}
