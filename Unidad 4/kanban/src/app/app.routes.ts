import { Routes } from '@angular/router';
import { Board } from './components/board/board';
import { BoardDetail } from './components/board-detail/board-detail';
import { BoardNew } from './components/board-new/board-new';

export const routes: Routes = [
    { path: '', component: Board },
    { path: 'tablero', component: Board },
    { path: 'tablero/:id', component: BoardDetail },
    { path: 'tablero-nuevo', component: BoardNew }
];
