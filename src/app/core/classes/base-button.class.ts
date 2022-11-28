import { Directive, Input, Output, EventEmitter } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Directive()
export class BaseButton {
  @Input() public type: ButtonType = 'button';
  @Input() public disabled = false;

  @Output() public buttonClick = new EventEmitter<Event>();

  public onButtonClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
