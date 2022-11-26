import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../../../classes/base-control.class';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestNumberComponent extends BaseControl {
  @Input() public minValue = 0;
  @Input() public step = 1;

  public addValue(): void {
    if (this.formControl.value < this.minValue) {
      this.formControl.setValue(this.minValue);
    } else {
      this.formControl.setValue(this.formControl.value + this.step);
    }
    this.onTouched();
  }

  public subtractValue(): void {
    this.formControl.setValue(this.formControl.value - this.step);
    this.onTouched();
  }
}
