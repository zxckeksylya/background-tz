import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestNumberComponent } from './test-number.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestNumberComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TestNumberComponent],
})
export class TestNumberModule {}
