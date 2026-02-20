import { Routes } from '@angular/router';
import { CharacterList } from './components/character-list/character-list';
import { CharacterDetail } from './components/character-detail/character-detail';
import { EpisodeDetail } from './components/episode-detail/episode-detail';
import { LocationDetail } from './components/location-detail/location-detail';

export const routes: Routes = [
    { path: '', redirectTo: '/character', pathMatch: 'full' },
    { path: 'character', component: CharacterList },
    { path: 'character/:id', component: CharacterDetail },
    { path: 'episode/:id', component: EpisodeDetail },
    { path: 'location/:id', component: LocationDetail }
];
