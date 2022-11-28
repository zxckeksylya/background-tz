import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFieldButtonModule } from './core/components/add-field-button/add-field-button.module';
import { ButtonModule } from './core/components/button/button.module';
import { TestCheckboxGroupModule } from './core/components/controls/test-checkbox-group/test-checkbox-group.module';
import { TestCheckboxModule } from './core/components/controls/test-checkbox/test-checkbox.module';
import { TestInputGroupModule } from './core/components/controls/test-input-group/test-input-group.module';
import { TestInputModule } from './core/components/controls/test-input/test-input.module';
import { TestNumberModule } from './core/components/controls/test-number/test-number.module';
import { TestSelectModule } from './core/components/controls/test-select/test-select.module';
import { RemoveFieldButtonModule } from './core/components/remove-field-button/remove-field-button.module';
import { FormModule } from './core/components/form/form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    TestCheckboxModule,
    TestSelectModule,
    ReactiveFormsModule,
    TestInputModule,
    TestNumberModule,
    TestCheckboxGroupModule,
    AddFieldButtonModule,
    RemoveFieldButtonModule,
    TestInputGroupModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
