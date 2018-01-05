import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatButtonModule, MatCardModule, MatIconModule } from "@angular/material";

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { IndexComponent } from './containers/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [IndexComponent]
})
export class DashboardModule { }
