import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeroesRoutingModule } from "./heroes-routing.module";

import { IndexComponent } from './containers/index/index.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './containers/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroActionsComponent } from './components/hero-actions/hero-actions.component';
import { EditComponent } from './containers/edit/edit.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { PowerChipListComponent } from './components/power-chip-list/power-chip-list.component';
import { AddHeroComponent } from './dialogs/add-hero/add-hero.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [AddHeroComponent],
  declarations: [IndexComponent, HeroesComponent, HeroComponent, HeroDetailComponent, HeroActionsComponent, EditComponent, EditHeroComponent, PowerChipListComponent, AddHeroComponent]
})
export class HeroesModule {
}
