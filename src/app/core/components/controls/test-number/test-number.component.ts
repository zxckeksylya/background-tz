import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestNumberComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() public label = '';
  @Input() public minValue = 0;
  @Input() public step = 1;

  public formControl = new FormControl();
  public required: boolean | undefined;

  private destroy$ = new Subject<void>();

  constructor(@Optional() protected ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.onInputValueChanges();
    this.required = this.ngControl.control?.hasValidator(Validators.required);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(value: any): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  public onTouched: () => void = () => {};

  public addValue(): void {
    if (this.formControl.value < this.minValue) {
      this.formControl.setValue(this.minValue);
    } else {
      this.formControl.setValue(this.formControl.value + this.step);
    }
    this.onTouched();
  }

  public subtractValue(): void {
    this.formControl.setValue(this.formControl.value - this.step);
    this.onTouched();
  }

  private onInputValueChanges(): void {
    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
      this.onChange(v);
    });
  }

  private onChange: (value: any) => void = () => {};
}
