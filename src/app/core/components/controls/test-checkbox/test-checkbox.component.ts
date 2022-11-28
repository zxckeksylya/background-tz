import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../../../classes/base-control.class';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCheckboxComponent extends BaseControl {
  @Input() public label = '';
}
