import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-checkbox-group',
  templateUrl: './test-checkbox-group.component.html',
  styleUrls: ['./test-checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TestCheckboxGroupComponent,
    },
  ],
})
export class TestCheckboxGroupComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() public labels: string[] = [];

  public form = this.formBuilder.group({
    data: this.formBuilder.array([]),
  });

  public checkAllControls: FormGroup = this.formBuilder.group({
    check: false,
  });

  private destroy$ = new Subject<void>();

  private toggleBlock = false;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.onInputValueChange();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    if (value) {
      for (const item of value.data) {
        this.form.controls.data.push(new FormControl(item));
      }
    } else {
      for (const {} of this.labels) {
        this.form.controls.data.push(new FormControl());
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

  private onInputValueChange(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
      if (!this.toggleBlock) {
        const isFullChecked = v.data?.filter(x => x === true).length === v.data?.length;
        if (isFullChecked) {
          this.checkAllControls.setValue({ check: true }, { emitEvent: false });
        } else {
          this.checkAllControls.setValue({ check: false }, { emitEvent: false });
        }
      }
    });

    this.checkAllControls.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.toggleBlock = true;
      if (v.check) {
        for (const iterator of this.form.controls.data.controls) {
          iterator.setValue(true);
        }
      } else {
        for (const iterator of this.form.controls.data.controls) {
          iterator.setValue(false);
        }
      }
      this.toggleBlock = false;
    });
  }
}
