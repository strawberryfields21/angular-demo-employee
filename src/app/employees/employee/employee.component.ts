import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  constructor(public service:EmployeeService){}
 

  addEmployee(){
    if(this.service.form.valid){
      this.service.addData(this.service.form.value)
      .subscribe({
        next:(res) => {
          alert("employee added successfully")
        },
        error:()=>{
          alert("Error while adding employee")
        }
      })
    }    
  }
  
}
