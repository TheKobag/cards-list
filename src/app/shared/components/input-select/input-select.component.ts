import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { KeyValue } from "../../../models/key-value.model";

@Component({
  selector: "app-input-select",
  templateUrl: "./input-select.component.html",
  styleUrls: ["./input-select.component.scss"]
})
export class InputSelectComponent implements OnInit {
  @Input() inputHeader: string;
  @Input() options: KeyValue[];
  @Output() selectedField: EventEmitter<string> = new EventEmitter<string>();

  value: string;

  constructor() {}

  ngOnInit() {}

  // Emits the value selected
  valueChanged(value) {
    this.selectedField.emit(value);
  }
}
