import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import { Power } from "../../../core/models/power.model";
import { DeletePower, LoadPowers } from "../../../state/powers/actions/powers";
import { getAllPowers, PowersState } from "../../../state/powers/reducers";
import { AddPowerComponent } from "../../dialogs/add-power/add-power.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  powers: Observable<Array<Power>>;

  constructor(private matDialog: MatDialog,
              private store: Store<PowersState>) {
  }

  ngOnInit() {
    this.powers = this.store.select(getAllPowers);
    this.store.dispatch(new LoadPowers());
  }

  onAdd() {
    this.matDialog.open(AddPowerComponent);
  }

  onDelete(power: Power) {
    this.store.dispatch(new DeletePower(power));
  }

}
