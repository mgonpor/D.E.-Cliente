import { Component, signal, Signal } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";
import { Response, Info } from '../../models/response';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-character-list',
  imports: [RouterLink],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {

  private urlSignal = signal<string | undefined>(undefined);

  public response: Signal<Response>;

  // TODO: corregir esto, solución sucia

  constructor(private _characterService: CharacterService) {
    // 2. Convertimos el signal de la URL a un Observable
    // 3. Usamos switchMap para llamar al servicio cada vez que la URL cambie
    // 4. Convertimos el resultado final a un Signal (esto sí está en el constructor)
    this.response = toSignal(
      toObservable(this.urlSignal).pipe(
        switchMap(url => this._characterService.findAll(url))
      ),
      { initialValue: new Response(new Info(0, 0, "", ""), []) }
    );
  }

  // 5. Para cambiar de página, solo actualizamos el signal de la URL
  page(newUrl: string) {
    this.urlSignal.set(newUrl);
  }

}
