import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCheckboxGroupComponent } from './test-checkbox-group.component';
import { TestCheckboxModule } from '../test-checkbox/test-checkbox.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestCheckboxGroupComponent],
  imports: [CommonModule, TestCheckboxModule, ReactiveFormsModule],
  exports: [TestCheckboxGroupComponent],
})
export class TestCheckboxGroupModule {}
