import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemonstrationTablePageComponent } from './pages/demonstration-table-page/demonstration-table-page.component';
import { DemonstrationCreatePageComponent } from './pages/demonstration-create-page/demonstration-create-page.component';
import { DemonstrationUpdatePageComponent } from './pages/demonstration-update-page/demonstration-update-page.component';

const routes: Routes = [
  {
    path: '',
    component: DemonstrationTablePageComponent,
  },
  {
    path: 'create',
    component: DemonstrationCreatePageComponent,
  },
  {
    path: 'update/:id',
    component: DemonstrationUpdatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemonstrationRoutingModule {}
