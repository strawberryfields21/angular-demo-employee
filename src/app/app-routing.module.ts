import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './employees/detail/detail.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path:'employees',component:EmployeeListComponent
  },
  {
    path:'employees/add',component:EmployeeComponent
  },
  {
    path:'employees/detail',component:DetailComponent
  },
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
