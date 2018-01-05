import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";

import { HeroesService } from "../../../core/services/heroes.service";
import { Hero } from "../../../core/models/hero.model";
import { MatDialog } from "@angular/material";
import { AddHeroComponent } from "../../dialogs/add-hero/add-hero.component";

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  heroes: Observable<Array<Hero>>;

  constructor(private heroesService: HeroesService,
              private matDialog: MatDialog) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  add() {
    this.matDialog.open(AddHeroComponent);
  }

  delete(hero: Hero) {
    this.heroesService.deleteHero(hero)
      .subscribe(() => this.heroes = this.heroesService.getHeroes());
  }

}
