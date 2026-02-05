import { Routes } from '@angular/router';
import { CharacterList } from './components/character-list/character-list';
import { CharacterDetail } from './components/character-detail/character-detail';

export const routes: Routes = [
    {path: '', redirectTo: '/character', pathMatch: 'full'},
    {path: 'character', component: CharacterList},
    {path: 'character/:id', component: CharacterDetail}
];
