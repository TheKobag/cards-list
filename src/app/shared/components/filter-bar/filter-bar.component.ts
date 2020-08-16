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
export class FilterBarComponent implements OnInit {
  // Options for Select Input
  @Input() searchFields: KeyValue[];

  // Emits the values for filtering
  @Output() filterParams: EventEmitter<FilterFileds> = new EventEmitter<FilterFileds>();

  // Accesses to InputTextComponent child
  @ViewChild(InputTextComponent) inputText: InputTextComponent;

  // Vbles to store data
  searchText: string = '';
  searchField: string = '';

  constructor() {}

  ngOnInit() {
  }

  // Manages ComboBox selection
  fieldSelected(selectedField: string) {
    if (this.searchField !== selectedField) {
      '' !== this.searchField ? this.inputText.resetValue() : null;
      this.searchField = selectedField;
    }
  }

  // Assigns typed field from text input
  onInputChanged(inputValue: string) {
    this.searchText = inputValue;
    this._emitValue( this.searchField, this.searchText);
  }

  /**
   * Emits the new value for filtering
   * @param searchField new field
   * @param searchText new text
   * @emits returns new value for filtering
   */
  private _emitValue(searchField: string, searchText: string) {
    this.filterParams.emit({ field: searchField, text: searchText });
  }
}
