import { Component, Signal } from '@angular/core';
import { Location as LocationModel } from '../../models/location';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-location-detail',
  imports: [],
  templateUrl: './location-detail.html',
  styleUrl: './location-detail.css',
})
export class LocationDetail {

  public location: Signal<LocationModel>;
  public id: number;

  constructor(private _locationService: LocationService, private _route: ActivatedRoute, private _location: Location) {
    this.id = this._route.snapshot.params['id'];
    this.location = toSignal(this._locationService.findById(this.id), { initialValue: {} as LocationModel });
  }

  goBack() {
    this._location.back();
  }

}
