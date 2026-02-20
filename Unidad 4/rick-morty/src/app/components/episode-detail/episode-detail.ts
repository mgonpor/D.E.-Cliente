import { Component, Signal } from '@angular/core';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../services/episode.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-episode-detail',
  imports: [],
  templateUrl: './episode-detail.html',
  styleUrl: './episode-detail.css',
})
export class EpisodeDetail {

  public episode: Signal<Episode>;
  public id: number;

  constructor(private _episodeService: EpisodeService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.params['id'];
    this.episode = toSignal(this._episodeService.findById(this.id), { initialValue: {} as Episode });
    console.log(this.episode().airDate);
  }

}
