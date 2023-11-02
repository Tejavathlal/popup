import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CreateformComponent } from './Component/createform/createform.component';
import { StudenttableComponent } from './Component/studenttable/studenttable.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';
import { PopupcreateComponent } from './Component/popupcreate/popupcreate.component';
import { PopuptableComponent } from './Component/popuptable/popuptable.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'popupcreate', component: PopupcreateComponent},
  {path: 'dashboard', component: DashboardComponent, children:[
    {path: 'createform', component:CreateformComponent},
    {path: 'studenttable', component: StudenttableComponent},
    {path: 'studentdetails/:id', component: StudentdetailsComponent},
    {path: 'edit-student/:id', component: CreateformComponent},
    {path: 'popuptable', component: PopuptableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
