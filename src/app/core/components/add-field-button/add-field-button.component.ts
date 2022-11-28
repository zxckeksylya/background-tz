import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseButton } from '../../classes/base-button.class';

@Component({
  selector: 'app-add-field-button',
  templateUrl: './add-field-button.component.html',
  styleUrls: ['./add-field-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFieldButtonComponent extends BaseButton {}
