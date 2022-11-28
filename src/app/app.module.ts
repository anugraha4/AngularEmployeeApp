import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:EmployeeaddComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  },
  {
    path:"edit",
    component:EmployeeEditComponent
  },
  {
    path:"view",
    component:EmployeeviewComponent
  },
  {
    path:"search",
    component:EmployeesearchComponent
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeaddComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    EmployeeviewComponent,
    EmployeesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
