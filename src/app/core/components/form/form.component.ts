import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ControlTypes } from '../../constants/control-types.constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {
  @Input() public jsonFormat: any;
  @Input() public dataObject: any;

  @Output() public submitted = new EventEmitter<any>();

  public labels: string[] = [];

  public form = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  public ngOnChanges(
    changes: SimpleChanges & { jsonFormat: SimpleChange; dataObject: SimpleChange },
  ): void {
    const jsonFormatCurrentValue = changes.jsonFormat?.currentValue;
    if (jsonFormatCurrentValue) {
      this.labels = Object.keys(jsonFormatCurrentValue);
      this.initForm();
    }
    const dataObjectCurrentValue = changes.dataObject?.currentValue;
    if (dataObjectCurrentValue) {
      this.form.patchValue(dataObjectCurrentValue, { emitEvent: false });
    }
  }

  public onSubmit(): void {
    this.form?.markAllAsTouched();
    if (this.form?.invalid) {
      return;
    }
    console.log(this.form.getRawValue());
    this.submitted.emit(this.form?.getRawValue());
  }

  private initForm(): void {
    this.labels.forEach(x => {
      let valueObj = null;
      switch (this.jsonFormat[x].controlType) {
        case ControlTypes.INPUT:
        case ControlTypes.SELECT: {
          valueObj = '';
          break;
        }
        case ControlTypes.NUMBER: {
          valueObj = 0;
          break;
        }
        case ControlTypes.INPUT_GROUP:
        case ControlTypes.CHECKBOX_GROUP: {
          valueObj = { data: null };
          break;
        }
        case ControlTypes.CHECKBOX: {
          valueObj = false;
          break;
        }
      }

      const validators = this.jsonFormat[x].required ? [Validators.required] : [];
      this.form.addControl(x, this.formBuilder.control(valueObj, validators));
    });
  }
}
