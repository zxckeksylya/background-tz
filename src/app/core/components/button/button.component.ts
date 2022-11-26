import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public type: ButtonType = 'button';
  @Input() public disabled = false;

  @Output() public buttonClick = new EventEmitter<Event>();

  public onButtonClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
