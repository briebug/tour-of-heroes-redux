import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSnackBarModule
} from "@angular/material";
import { SharedModule } from "../shared/shared.module";
import { EditPowerComponent } from './components/edit-power/edit-power.component';
import { PowersComponent } from './components/powers/powers.component';
import { EditComponent } from './containers/edit/edit.component';

import { IndexComponent } from './containers/index/index.component';
import { AddPowerComponent } from './dialogs/add-power/add-power.component';

import { PowersRoutingModule } from "./powers-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    PowersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    AddPowerComponent
  ],
  declarations: [IndexComponent, PowersComponent, EditComponent, EditPowerComponent, AddPowerComponent]
})
export class PowersModule { }
