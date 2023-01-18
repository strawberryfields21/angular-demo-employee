import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { DetailComponent } from './employees/detail/detail.component';
import { LoginComponent } from './login/login.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HeaderComponent,
    DetailComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
