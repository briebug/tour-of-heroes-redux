import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";

import { Hero } from "../../../core/models/hero.model";
import { Power } from "../../../core/models/power.model";
import { HeroesService } from "../../../core/services/heroes.service";
import { PowersService } from "../../../core/services/powers.service";

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  hero: Observable<Hero>;

  powers: Observable<Array<Power>>;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private matSnackBar: MatSnackBar,
              private powersService: PowersService) {
  }

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap
      .pipe(
        switchMap(paramMap => this.heroesService.getHero(paramMap.get('id')))
      );
    this.powers = this.powersService.getPowers();
  }

  onHeroChange(hero: Hero) {
    this.heroesService.updateHero(hero)
      .subscribe(() => this.matSnackBar.open('Hero Saved', 'Success', {
        duration: 2000
      }));
  }

}
