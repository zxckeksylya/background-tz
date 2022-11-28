import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFieldButtonModule } from '../../add-field-button/add-field-button.module';
import { RemoveFieldButtonModule } from '../../remove-field-button/remove-field-button.module';
import { TestInputModule } from '../test-input/test-input.module';
import { TestInputGroupComponent } from './test-input-group.component';

@NgModule({
  declarations: [TestInputGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestInputModule,
    AddFieldButtonModule,
    RemoveFieldButtonModule,
  ],
  exports: [TestInputGroupComponent],
})
export class TestInputGroupModule {}
