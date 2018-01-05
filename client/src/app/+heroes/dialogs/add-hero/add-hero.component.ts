import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Observable } from "rxjs/Observable";

import { Power } from "../../../core/models/power.model";
import { PowersService } from "../../../core/services/powers.service";
import { Character } from "../../../core/models/character.model";
import { CharactersService } from "../../../core/services/characters.service";
import { debounceTime, filter, switchMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { HeroesService } from "../../../core/services/heroes.service";

@Component({
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  characters: Observable<Array<Character>>;

  form: FormGroup;

  powers: Observable<Array<Power>>;

  private character: Character;

  private selectedPowers: Array<Power> = [];

  constructor(private charactersService: CharactersService,
              private formBuilder: FormBuilder,
              private heroesService: HeroesService,
              private matDialogRef: MatDialogRef<AddHeroComponent>,
              private powersService: PowersService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.powers = this.powersService.getPowers();

    this.characters = this.form.get('name')
      .valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.filter(value))
      );
  }

  characterSelected(event: MatAutocompleteSelectedEvent) {
    this.character = event.option.value;
  }

  close() {
    this.matDialogRef.close();
  }

  displayCharacterAutocomplete(character: Character): string {
    if (character) {
      return character.name;
    }
    return '';
  }

  filter(name: string): Observable<Array<Character>> {
    if (name.length === 0) {
      return of([]);
    }
    return this.charactersService.getCharacters(name);
  }

  onPowerChange(powers: Power[]) {
    this.selectedPowers = powers;
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.heroesService.createHero({
      character: this.character,
      powers: this.selectedPowers.map(power => power.id)
    }).subscribe(() => this.close());
  }

}
