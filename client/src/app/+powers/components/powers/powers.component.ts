import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Power } from "../../../core/models/power.model";

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent {

  @Input() powers: Power[];

  @Output() deleteChange = new EventEmitter<Power>();

  @Output() editChange = new EventEmitter<Power>();

  constructor() { }

}
