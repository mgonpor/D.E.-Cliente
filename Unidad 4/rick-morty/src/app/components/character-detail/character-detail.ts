import { Component, Signal } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail {

  public character: Signal<Character>;
  public id: number;

  constructor(private _characterService: CharacterService, private _route: ActivatedRoute, private _location: Location) {
    this.id = this._route.snapshot.params['id'];
    this.character = toSignal(this._characterService.findById(this.id), { initialValue: {} as Character });
  }

  goBack() {
    this._location.back();
  }

}