import { Component, OnDestroy, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
export class TestInputGroupComponent implements ControlValueAccessor, OnDestroy, OnInit {
  public form = this.formBuilder.group({
    data: this.formBuilder.array([]),
  });

  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.onInputValueChanges();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    if (!value.data) {
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
    this.form.controls.data.push(new FormControl(''));
  }

  public removeControl(): void {
    this.form.controls.data.removeAt(-1);
  }

  private onInputValueChanges(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
    });
  }
}
