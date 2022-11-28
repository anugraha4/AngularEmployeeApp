import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeaddComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
