import { Component, Signal } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../services/episode.service';
import { Observable } from 'rxjs';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail {

  public character: Signal<Character>;
  public episodes: Episode[] = [];
  public id: number;

  constructor(private _characterService: CharacterService, private _episodeService: EpisodeService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.params['id'];
    this.character = toSignal(this._characterService.findById(this.id), {initialValue: {} as Character});
    this.character().episode.forEach(episodeUrl => {
      this._episodeService.findByUrl(episodeUrl).subscribe(episode => {
        this.episodes.push(episode);
      });
    }); 
  }

}