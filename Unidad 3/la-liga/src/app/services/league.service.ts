import { Injectable, signal, computed } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
    providedIn: 'root'
})
export class LeagueService {
    private readonly _teams = signal<Team[]>([
        { name: 'Real Madrid', points: 31, played: 12, won: 10, drawn: 1, lost: 1, goalsFor: 26, goalsAgainst: 10 },
        { name: 'FC Barcelona', points: 28, played: 12, won: 9, drawn: 1, lost: 2, goalsFor: 32, goalsAgainst: 15 },
        { name: 'Villarreal', points: 26, played: 12, won: 8, drawn: 2, lost: 2, goalsFor: 24, goalsAgainst: 10 },
        { name: 'Atlético de Madrid', points: 25, played: 12, won: 7, drawn: 4, lost: 1, goalsFor: 24, goalsAgainst: 11 },
        { name: 'Real Betis', points: 20, played: 12, won: 5, drawn: 5, lost: 2, goalsFor: 19, goalsAgainst: 13 },
        { name: 'Espanyol', points: 18, played: 12, won: 5, drawn: 3, lost: 4, goalsFor: 15, goalsAgainst: 15 },
        { name: 'Athletic', points: 17, played: 12, won: 5, drawn: 2, lost: 5, goalsFor: 12, goalsAgainst: 13 },
        { name: 'Getafe', points: 17, played: 12, won: 5, drawn: 2, lost: 5, goalsFor: 12, goalsAgainst: 14 },
        { name: 'Sevilla', points: 16, played: 12, won: 5, drawn: 1, lost: 6, goalsFor: 18, goalsAgainst: 19 },
        { name: 'Deportivo Alavés', points: 15, played: 12, won: 4, drawn: 3, lost: 5, goalsFor: 11, goalsAgainst: 11 }
    ]);

    readonly teams = computed(() => {
        return [...this._teams()].sort((a, b) => {
            // Puntos
            if (a.points !== b.points) return b.points - a.points;

            // Diferencia de goles
            const diffA = a.goalsFor - a.goalsAgainst;
            const diffB = b.goalsFor - b.goalsAgainst;
            if (diffA !== diffB) return diffB - diffA;

            // Goles a favor
            return b.goalsFor - a.goalsFor;
        });
    });

    addMatch(localName: string, visitorName: string, goalsLocal: number, goalsVisitor: number): void {
        this._teams.update(teams => {
            const newTeams = [...teams];
            const local = newTeams.find(t => t.name === localName);
            const visitor = newTeams.find(t => t.name === visitorName);

            if (local && visitor) {
                // Actualizar goles
                local.goalsFor += goalsLocal;
                local.goalsAgainst += goalsVisitor;
                visitor.goalsFor += goalsVisitor;
                visitor.goalsAgainst += goalsLocal;

                // Actualizar partidos jugados
                local.played += 1;
                visitor.played += 1;

                // Actualizar ganados/perdidos/empatados y puntos
                if (goalsLocal > goalsVisitor) {
                    local.won += 1;
                    visitor.lost += 1;
                } else if (goalsLocal < goalsVisitor) {
                    local.lost += 1;
                    visitor.won += 1;
                } else {
                    local.drawn += 1;
                    visitor.drawn += 1;
                }

                // Recalcular puntos
                local.points = (local.won * 3) + local.drawn;
                visitor.points = (visitor.won * 3) + visitor.drawn;
            }

            return newTeams;
        });
    }
}
