import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators, Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

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
  email = new FormControl('', [Validators.required, Validators.email]);
  today = new Date(); 

  addData(data : any){
    return this.http.post<any>("http://localhost:3000/employeeList",data);
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/employeeList")
  }
}
