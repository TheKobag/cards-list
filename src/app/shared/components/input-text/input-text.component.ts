import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"]
})
export class InputTextComponent implements OnInit {
  @Input() isEnabled: boolean;
  @Input() inputHeader: string;
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  value: string;

  constructor() {}

  ngOnInit() {}

  // Emits the value typed
  valueChanged(value) {
    this.inputValue.emit(value);
  }

  // Empties the input and emits the new value
  resetValue() {
    this.value = '';
    this.inputValue.emit('');
  }
}
