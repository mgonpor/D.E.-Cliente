import { Component, signal } from '@angular/core';
import { CharacterList } from "./components/character-list/character-list";

@Component({
  selector: 'app-root',
  imports: [CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rick-morty');
}
