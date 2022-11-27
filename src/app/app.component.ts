import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public form!: FormGroup;

  public json = {
    name: {
      label: 'name',
      controlType: 'input',
    },
    secondName: {
      label: 'secondName',
      controlType: 'input',
      required: true,
    },
    lastName: {
      label: 'lastName',
      controlType: 'input',
      required: true,
      description: 'description',
    },
  };

  // public data = [
  //   {
  //     id: 1,
  //     name: 'mem',
  //   },
  //   {
  //     id: 2,
  //     name: 'lol',
  //   },
  // ];

  public data = ['1', '2', '3'];

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      input: ['', [Validators.required]],
      num: 0,
      select: ['', [Validators.required]],
      checkBox: true,
      checkBoxGroup: [[]],
      inputGroup: [],
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.getRawValue());
  }
}
