import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestInputModule } from '../controls/test-input/test-input.module';
import { TestNumberModule } from '../controls/test-number/test-number.module';
import { ButtonModule } from '../button/button.module';
import { LabelModule } from '../label/label.module';
import { TestCheckboxModule } from '../controls/test-checkbox/test-checkbox.module';
import { TestSelectModule } from '../controls/test-select/test-select.module';
import { TestCheckboxGroupModule } from '../controls/test-checkbox-group/test-checkbox-group.module';
import { TestInputGroupModule } from '../controls/test-input-group/test-input-group.module';
import { DescriptionModule } from '../description/description.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestInputModule,
    TestNumberModule,
    ButtonModule,
    LabelModule,
    TestCheckboxModule,
    TestSelectModule,
    TestCheckboxGroupModule,
    TestInputGroupModule,
    DescriptionModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
