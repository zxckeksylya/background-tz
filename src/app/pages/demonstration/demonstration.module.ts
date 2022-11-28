import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemonstrationRoutingModule } from './demonstration-routing.module';
import { FormModule } from 'src/app/core/components/form/form.module';
import { DemonstrationTablePageComponent } from './pages/demonstration-table-page/demonstration-table-page.component';
import { DemonstrationCreatePageComponent } from './pages/demonstration-create-page/demonstration-create-page.component';
import { DemonstrationUpdatePageComponent } from './pages/demonstration-update-page/demonstration-update-page.component';
import { ButtonModule } from '../../core/components/button/button.module';

@NgModule({
  declarations: [
    DemonstrationTablePageComponent,
    DemonstrationCreatePageComponent,
    DemonstrationUpdatePageComponent,
  ],
  imports: [CommonModule, DemonstrationRoutingModule, FormModule, ButtonModule],
})
export class DemonstrationModule {}
