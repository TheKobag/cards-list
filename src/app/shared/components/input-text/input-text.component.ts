import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() isEnabled = false;
  @Input() inputHeader = '';
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  /**
   * Emits the value typed
   */
  valueChanged(value: string) {
    this.emitValue(value);
  }

  /**
   * Empties the input and emits the new value
   */
  resetValue() {
    this.value = '';
    this.emitValue('');
  }

  /**
   * Emits the new value for the input
   * @emits returns new value for input text
   */
  private emitValue(value: string) {
    this.inputValue.emit(value);
  }
}
