import { Component, OnDestroy, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-input-group',
  templateUrl: './test-input-group.component.html',
  styleUrls: ['./test-input-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TestInputGroupComponent,
    },
  ],
})
export class TestInputGroupComponent implements ControlValueAccessor, DoCheck, OnDestroy {
  public form = this.formBuilder.group({
    data: this.formBuilder.array([]),
  });

  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  public ngDoCheck(): void {
    this.onChange(this.form.getRawValue());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    if (!value) {
      this.form.controls.data.push(new FormControl());
    } else {
      for (const item of value.data) {
        this.form.controls.data.push(new FormControl(item));
      }
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  public onTouched: () => void = () => {};

  public onChange: (value: any) => void = () => {};

  public addControl(): void {
    this.form.controls.data.controls.push(new FormControl(''));
  }

  public removeControl(): void {
    this.form.controls.data.controls.pop();
  }
}
