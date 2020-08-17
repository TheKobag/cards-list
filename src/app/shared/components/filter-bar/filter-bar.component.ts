import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilterFileds } from '../../../models/filter-fileds.model';
import { KeyValue } from '../../../models/key-value.model';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  // Options for Select Input
  @Input() searchFields: KeyValue[];

  // Emits the values for filtering
  @Output() filterParams: EventEmitter<FilterFileds> = new EventEmitter<FilterFileds>();

  // Accesses to InputTextComponent child
  @ViewChild(InputTextComponent) inputText: InputTextComponent;

  searchText = '';
  searchField = '';

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
    this.emitValue( this.searchField, this.searchText);
  }

  /**
   * Emits the new value for filtering
   * @param searchField new field
   * @param searchText new text
   * @emits returns new value for filtering
   */
  private emitValue(searchField: string, searchText: string) {
    this.filterParams.emit({ field: searchField, text: searchText });
  }
}
