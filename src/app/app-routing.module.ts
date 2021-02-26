import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './form/form.component';
import {PredictComponent} from './predict/predict.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'predict/:imgurl', component: PredictComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [FormComponent, PredictComponent];
