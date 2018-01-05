import { Component, Input, OnInit } from '@angular/core';

import { Hero } from "../../../core/models/hero.model";
import { Power } from "../../../core/models/power.model";
import { CharacterUrl } from "../../../core/models/character-url.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Input() powers: Power[];

  constructor() { }

  ngOnInit() {
  }

  getCharacterUrlByType(type: "detail" | "wiki" | "comiclink"): CharacterUrl {
    return this.hero.character.urls.find(url => url.type === type);
  }

  getHeroImage(): string {
    const thumbnail = this.hero.character.thumbnail;
    return `${thumbnail.path}/landscape_xlarge.${thumbnail.extension}`;
  }

  hasCharacterUrlByType(type: 'detail' | 'wiki' | 'comiclink'): boolean {
    return this.hero.character.urls.map(url => url.type).indexOf(type) > -1;
  }

}
