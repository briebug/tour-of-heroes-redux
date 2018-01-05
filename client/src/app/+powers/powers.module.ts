import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSnackBarModule
} from "@angular/material";

import { PowersRoutingModule } from "./powers-routing.module";

import { IndexComponent } from './containers/index/index.component';
import { PowersComponent } from './components/powers/powers.component';
import { EditComponent } from './containers/edit/edit.component';
import { EditPowerComponent } from './components/edit-power/edit-power.component';
import { AddPowerComponent } from './dialogs/add-power/add-power.component';
import { SharedModule } from "../shared/shared.module";

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
