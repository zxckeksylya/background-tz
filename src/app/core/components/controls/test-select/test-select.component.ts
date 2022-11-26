import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../../../classes/base-control.class';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSelectComponent extends BaseControl {
  @Input() public data: any[] = [];

  public value: any;
  public active!: number;

  public override writeValue(value: any): void {
    if (this.data.findIndex(x => x === value)) {
      this.active = 0;
      this.formControl.setValue(this.data[0], { emitEvent: false });
    } else {
      this.active = this.data.findIndex(x => x === value);
      this.formControl.setValue(value, { emitEvent: false });
    }
  }

  public setValue(item: any): void {
    this.formControl.setValue(item);
    this.onTouched();
  }
}
