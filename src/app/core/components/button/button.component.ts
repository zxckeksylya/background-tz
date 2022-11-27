import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseButton } from '../../classes/base-button.class';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseButton {}
