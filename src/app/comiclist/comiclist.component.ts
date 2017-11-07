import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/service/entities.service';
import { ComicsService } from '../shared/service/comics.service';

@Component({
  selector: 'mh-comics-list',
  templateUrl: './comiclist.component.html',
  styleUrls: ['./comiclist.component.css'],
  providers: [
    {provide: EntitiesService, useClass: ComicsService}
  ]
})
export class ComicsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}