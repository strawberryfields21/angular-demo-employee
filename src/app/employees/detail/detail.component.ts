import { CurrencyPipe, formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(public service:EmployeeService){}
 
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
  ngOnInit() {
    this.form.controls['username'].setValue(history.state.item.username);
    this.form.controls['firstName'].setValue(history.state.item.firstName);
    this.form.controls['lastName'].setValue(history.state.item.lastName);
    this.form.controls['email'].setValue(history.state.item.email);
    this.form.controls['birthDate'].setValue(history.state.item.birthDate);
    this.form.controls['basicSalary'].setValue(formatCurrency(history.state.item.basicSalary,'en-US','RP','IDR','1.2-2'));
    this.form.controls['status'].setValue(history.state.item.status);
    this.form.controls['group'].setValue(history.state.item.group);
    this.form.controls['description'].setValue(history.state.item.description);
  }

}
