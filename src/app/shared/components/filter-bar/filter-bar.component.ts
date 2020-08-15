import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FilterFileds } from "../../../models/filter-fileds.model";
import { KeyValue } from "../../../models/key-value.model";
import { InputTextComponent } from "../input-text/input-text.component";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrls: ["./filter-bar.component.scss"]
})
export class FilterBarComponent {
  // Options for Select Input
  @Input() searchFields: KeyValue[];

  // Emits the values for filtering
  @Output() filterParams: EventEmitter<FilterFileds> = new EventEmitter<FilterFileds>();

  // Accesses to InputTextComponent child
  @ViewChild(InputTextComponent) inputText: InputTextComponent;

  // Vbles to store data
  searchText: string;
  searchField: string;

  constructor() {}

  // Manages ComboBox selection
  fieldSelected(selectedField) {
    if (this.searchField !== selectedField) {
      this.searchField = selectedField;
      this.inputText.resetValue();
    }
  }

  // Assigns typed field from text input and emits both values
  onInputChanged(inputValue) {
    this.searchText = inputValue;
    this.filterParams.emit({ field: this.searchField, text: this.searchText });
  }
}
