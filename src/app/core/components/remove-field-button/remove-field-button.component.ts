import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseButton } from '../../classes/base-button.class';

@Component({
  selector: 'app-remove-field-button',
  templateUrl: './remove-field-button.component.html',
  styleUrls: ['./remove-field-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveFieldButtonComponent extends BaseButton {}
