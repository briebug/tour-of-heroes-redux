import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  @Input() heroes: Hero[];

  @Output() deleteChange = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

}
