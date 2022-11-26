import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from 'src/app/core/classes/base-control.class';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputComponent extends BaseControl {}
