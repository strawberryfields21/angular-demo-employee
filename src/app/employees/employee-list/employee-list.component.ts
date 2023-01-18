import { Component,OnInit,ViewChild,Pipe } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RouterModule,Routes , Router, ActivatedRoute} from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import * as _ from 'lodash';
import { filter } from 'lodash';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  constructor(public service:EmployeeService,private route: ActivatedRoute,private router:Router){}
 
  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName','email','birthDate','basicSalary','status','group','description','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllEmployee();
   
   

    
  }
  response : any;
  getAllEmployee(){
    this.service.getEmployee()
    .subscribe({
      next:(res) => {
        this.response = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let getFilteredKey = localStorage.getItem('filteredKey');
        let getFilteredGroup = localStorage.getItem('filteredGroup');
        if(getFilteredGroup)
        {
          let filteredData = _.filter(this.response,(item) => {
            return item.group.toLowerCase() == getFilteredGroup;
          })
          this.dataSource = new MatTableDataSource(filteredData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        if(getFilteredKey != null )
        {
          this.dataSource.filter = getFilteredKey;
          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      },
      error:()=>{
        alert("Error while getting employee")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    localStorage.setItem('filteredKey',filterValue.trim().toLowerCase());
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      
    }
  }

  navigates(row : any) : void {
    this.router.navigate(['/employees/detail'],{state:{item:row}});
  }
  onChange($event:any){
    let filteredData = _.filter(this.response,(item) => {
      localStorage.setItem('filteredGroup',$event.value.toLowerCase());
      return item.group.toLowerCase() == $event.value.toLowerCase();
    })
    this.dataSource = new MatTableDataSource(filteredData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  edit(){
    alert("Edited")
  }
  delete(){
    alert("deleted")
  }
}
