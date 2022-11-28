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
    num: {
      label: 'number',
      controlType: 'number',
    },
    select: {
      label: 'select',
      controlType: 'select',
      choices: ['asd', 'qwe'],
      required: true,
    },
    inputGroup: {
      label: 'inputGroup',
      controlType: 'inputGroup',
    },
    checkboxGroup: {
      label: 'checkboxes',
      controlType: 'checkboxGroup',
      choices: ['asd', 'dsd'],
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
      select: ['2', [Validators.required]],
      checkBox: true,
      checkBoxGroup: { data: [true, false, true] },
      inputGroup: { data: ['mem', 'lol'] },
    });
  }

  public onSubmit(value: any): void {
    console.log(value);
  }
}
