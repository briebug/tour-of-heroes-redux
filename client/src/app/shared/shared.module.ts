import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { LayoutComponent } from "./components/layout/layout.component";
import { RouterModule } from "@angular/router";
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';

const components = [
  DialogHeaderComponent,
  LayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
