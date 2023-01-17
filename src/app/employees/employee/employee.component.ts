import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  constructor(public service:EmployeeService){}
 
  groups = [
    {id:1,value: 'Group 1'},
    {id:2,value: 'Group 2'},
    {id:3,value: 'Group 3'},
    {id:4,value: 'Group 4'},
    {id:5,value: 'Group 5'},
    {id:6,value: 'Group 6'},
    {id:7,value: 'Group 7'},
    {id:8,value: 'Group 8'},
    {id:9,value: 'Group 9'},
    {id:10,value: 'Group 10'}
  ]


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
