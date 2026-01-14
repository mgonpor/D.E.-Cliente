import { Component, inject, signal } from '@angular/core';
import { LeagueService } from './services/league.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  private readonly leagueService = inject(LeagueService);

  protected readonly teams = this.leagueService.teams;

  protected readonly matchForm = {
    local: '',
    visitor: '',
    goalsLocal: null as number | null,
    goalsVisitor: null as number | null
  };

  protected readonly validationMessage = signal<{ text: string, type: 'error' | 'success' | '' }>({ text: '', type: '' });

  addMatch(): void {
    const { local, visitor, goalsLocal, goalsVisitor } = this.matchForm;

    if (!local || !visitor || goalsLocal === null || goalsVisitor === null) {
      this.validationMessage.set({ text: 'Por favor, rellena todos los campos.', type: 'error' });
      return;
    }

    if (local === visitor) {
      this.validationMessage.set({ text: 'Los equipos no pueden ser iguales.', type: 'error' });
      return;
    }

    if (goalsLocal < 0 || goalsVisitor < 0) {
      this.validationMessage.set({ text: 'Los goles no pueden ser negativos.', type: 'error' });
      return;
    }

    this.leagueService.addMatch(local, visitor, goalsLocal, goalsVisitor);
    this.validationMessage.set({ text: 'Partido añadido correctamente.', type: 'success' });

    // Reset form
    this.matchForm.local = '';
    this.matchForm.visitor = '';
    this.matchForm.goalsLocal = null;
    this.matchForm.goalsVisitor = null;
  }
}
