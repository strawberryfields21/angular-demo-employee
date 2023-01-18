import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
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
  form : FormGroup = new FormGroup({ 
    $key: new FormControl(null),
    username: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    birthDate: new FormControl('',Validators.required),
    basicSalary: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    status: new FormControl('',Validators.required),
    group: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })
  today = new Date(); 

  addData(data : any){
    return this.http.post<any>("http://localhost:3000/employeeList",data);
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/employeeList")
  }
}
