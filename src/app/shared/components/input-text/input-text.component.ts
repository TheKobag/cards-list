import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() isEnabled: boolean = false;
  @Input() inputHeader: string = "";
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  value: string = '';

  constructor() {}

  ngOnInit() {}

  /**
   * Emits the value typed
   */
  valueChanged(value) {
    this._emitValue(value);
  }

  /**
   * Empties the input and emits the new value
   */
  resetValue() {
    this.value = '';
    this._emitValue('');
  }

  /**
   * Emits the new value for the input
   * @emits returns new value for input text
   */
  private _emitValue(value) {
    this.inputValue.emit(value);
  }
}
