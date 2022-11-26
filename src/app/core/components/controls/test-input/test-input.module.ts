import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestInputComponent } from './test-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TestInputComponent],
})
export class TestInputModule {}
