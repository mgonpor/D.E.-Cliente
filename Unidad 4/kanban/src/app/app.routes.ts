import { Routes } from '@angular/router';
import { Board } from './components/board/board';
import { BoardDetail } from './components/board-detail/board-detail';
import { BoardNew } from './components/board-new/board-new';
import { BoardDetailNew } from './components/board-detail-new/board-detail-new';

export const routes: Routes = [
    { path: '', component: Board },
    { path: 'tablero', component: Board },
    { path: 'tablero/nuevo', component: BoardNew },
    { path: 'tablero/:id', component: BoardDetail },
    { path: 'tablero/:id/columna-nueva', component: BoardDetailNew }
];
