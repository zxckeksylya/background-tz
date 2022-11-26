import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSelectComponent } from './test-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from '../../dropdown/dropdown.module';

@NgModule({
  declarations: [TestSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  exports: [TestSelectComponent],
})
export class TestSelectModule {}
