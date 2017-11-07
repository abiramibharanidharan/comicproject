import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';

import { CharactersService} from './shared/service/character.service' 
import { ComicsService} from './shared/service/comics.service' 
import { CreatorsService} from './shared/service/creators.service' 
import {EntitiesService} from './shared/service/entities.service'
  
import { CharactersListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './character-detail/character-detail.component';
import { ComicsListComponent } from './comiclist/comiclist.component';
import { ComicDetailsComponent } from './comic-detail/comic-detail.component';
import { CreatorsListComponent } from './creators-list/creators-list.component';
import { CreatorDetailsComponent  } from './creators-detail/creators-detail.component';
import {EntitiesListComponent} from'./entities-list/entities-list.component'
import { ThumbnailComponent} from './thumbnail/thumbnail.component'
import {LinksListComponent } from './links-list/links-list.component'
import {AssociatedItemsComponent} from './associated-item/associated-items.component'
import {ComicCreatorsComponent} from './comic-creators/comic-creators.component'
import {EntitiesListItemComponent} from './entities-list-item/entities-list-item.component'
import {ItemNameComponent} from './item-name/item-name.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
     ComicsListComponent,
    ComicDetailsComponent,
    EntitiesListComponent,
     ThumbnailComponent,
     LinksListComponent,
     CreatorDetailsComponent,
     CreatorsListComponent,
     ComicCreatorsComponent,
     EntitiesListItemComponent,
     ItemNameComponent,
     AssociatedItemsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,
    CharactersService,
    ComicsService,
    CreatorsService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
