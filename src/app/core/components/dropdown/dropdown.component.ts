import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() public data: any[] = [];
  @Input() public active?: number;

  @Output() public valueChange = new EventEmitter();

  public select(value: any, index: number): void {
    this.active = index;
    this.valueChange.emit(value);
  }
}
