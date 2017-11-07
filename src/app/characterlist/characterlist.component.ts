import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/service/entities.service';
import { CharactersService } from '../shared/service/character.service';

@Component({
  selector: 'mh-characters-list',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
  providers: [
    {provide: EntitiesService, useClass: CharactersService}
  ]
})
export class CharactersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}