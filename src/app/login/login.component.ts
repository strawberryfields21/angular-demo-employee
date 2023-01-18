import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes , Router, ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  username:string | undefined;
  password:string | undefined;
  login(){
    console.log(this.username)
      if(this.username == "admin" && this.password == "admin")
      {
        this.router.navigate(['/employees']);
      }
      else
      {
        alert("username / password not match")
      }
  }
}
