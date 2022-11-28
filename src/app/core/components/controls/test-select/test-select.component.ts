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
    const index = this.data.findIndex(x => x === value);
    if (index === -1) {
    } else {
      this.active = index;
      this.formControl.patchValue(value);
    }
  }

  public setValue(item: any): void {
    this.formControl.setValue(item);
    this.onTouched();
  }
}
