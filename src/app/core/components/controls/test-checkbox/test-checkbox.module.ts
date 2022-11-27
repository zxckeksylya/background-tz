import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCheckboxComponent } from './test-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TestCheckboxComponent],
})
export class TestCheckboxModule {}
