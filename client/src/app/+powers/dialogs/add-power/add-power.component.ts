import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatSnackBar } from "@angular/material";

import { PowersService } from "../../../core/services/powers.service";
import { Power } from "../../../core/models/power.model";

@Component({
  templateUrl: './add-power.component.html',
  styleUrls: ['./add-power.component.scss']
})
export class AddPowerComponent implements OnInit {

  form: FormGroup;

  constructor(private matDialogRef: MatDialogRef<AddPowerComponent>,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private powersService: PowersService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  close() {
    this.matDialogRef.close();
  }

  onAdd() {
    const power = <Power>this.form.value;
    this.powersService.createPower(power)
      .subscribe(() => {
        this.matSnackBar.open('Power Created', 'Success', {
          duration: 2000
        });
        this.close();
      });
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }

}
