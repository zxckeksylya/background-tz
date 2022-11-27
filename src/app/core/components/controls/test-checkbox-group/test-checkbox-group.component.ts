import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-test-checkbox-group',
  templateUrl: './test-checkbox-group.component.html',
  styleUrls: ['./test-checkbox-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCheckboxGroupComponent implements ControlValueAccessor, OnDestroy, OnInit {
  public formArray!: FormArray<FormGroup>;

  public checkAllControls: FormGroup = this.formBuilder.group({
    check: false,
  });

  public labels: any[] = [];
  private destroy$ = new Subject<void>();

  private toggleBlock = false;

  constructor(@Optional() private ngControl: NgControl, private formBuilder: FormBuilder) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.onInputValueChange();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    this.formArray = new FormArray(
      value.map((x: any) => {
        const label = Object.keys(x)[0];
        const val = Object.values(x)[0];
        this.labels.push(label);
        return this.formBuilder.group({
          [label]: val,
        });
      }),
    );
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formArray.disable();
    } else {
      this.formArray.enable();
    }
  }

  public onTouched: () => void = () => {};

  public onChange: (value: any) => void = () => {};

  private onInputValueChange(): void {
    this.formArray.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
      if (!this.toggleBlock) {
        const isFullChecked = v.filter(x => Object.values(x)[0] === true).length === v.length;
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
        for (const iterator of this.formArray.controls) {
          const label = Object.keys(iterator.controls)[0];
          iterator.controls[label].setValue(true);
        }
      } else {
        for (const iterator of this.formArray.controls) {
          const label = Object.keys(iterator.controls)[0];
          iterator.controls[label].setValue(false);
        }
      }
      this.toggleBlock = false;
    });
  }
}
