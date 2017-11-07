import { Component, OnInit } from '@angular/core';

import { EntitiesService } from '../shared/service/entities.service';
import { CreatorsService } from '../shared/service/creators.service';

@Component({
  selector: 'mh-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.css'],
  providers: [
    {provide: EntitiesService, useClass: CreatorsService}
  ]
})
export class CreatorsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}