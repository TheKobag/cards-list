import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KeyValue } from '../../../models/key-value.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  @Input() inputHeader: string;
  @Input() options: KeyValue[];
  @Output() selectedField: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  /**
   * Emits the option selected
   * @param value new value
   */
  valueChanged(value: string) {
    this.emitValue(value);
  }

  /**
   * Emits the new value for the input
   * @param value new value
   * @emits returns new value for input text
   */
  private emitValue(value: string) {
    this.selectedField.emit(value);
  }
}
