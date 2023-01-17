import { AfterViewInit,Component,OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from 'src/app/shared/employee.service';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  constructor(public service:EmployeeService){}

  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName','email','birthDate','basicSalary','status','group','description'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.service.getEmployee()
    .subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res);
        this.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert("Error while getting employee")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
