import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './character-detail/character-detail.component';
import { ComicsListComponent } from './comiclist/comiclist.component';
import { ComicDetailsComponent } from './comic-detail/comic-detail.component';
import { CreatorsListComponent } from './creators-list/creators-list.component';
import { CreatorDetailsComponent } from './creators-detail/creators-detail.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/characters',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'comics/:id', component: ComicDetailsComponent },
  { path: 'creators', component: CreatorsListComponent },
  { path: 'creators/:id', component: CreatorDetailsComponent },
  { path: 'callback', component: CallbackComponent },
 
];
