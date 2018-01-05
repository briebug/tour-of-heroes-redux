import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { debounceTime } from "rxjs/operators";

import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-edit-power',
  templateUrl: './edit-power.component.html',
  styleUrls: ['./edit-power.component.scss']
})
export class EditPowerComponent implements OnChanges, OnInit {

  form: FormGroup;

  @Input() power: Power;

  @Output() powerChange = new EventEmitter<Power>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    if (this.power) {
      this.populateForm();
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.powerChange.emit({
          ...this.power,
          ...value
        });
      });
  }

  populateForm() {
    this.form.patchValue(this.power, {
      emitEvent: false
    });
  }

}
