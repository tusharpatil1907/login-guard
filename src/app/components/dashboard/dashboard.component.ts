import { Component, OnInit } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthinticationService } from '../../service/authintication.service';
import { User } from '../../Interfaces/User';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminComponent,UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
constructor(private login:AuthinticationService){}


  isAdmin:boolean = false;
  userData!:User
  checkIsAdmin(){
  if(this.login.loogedInUserData!= null){
      this.userData = this.login.loogedInUserData
      console.log(this.userData.role)
      this.userData.role == "admin"? this.isAdmin = true: this.isAdmin= false;
  }
  else{
    this.login.loggedout()
  }
}
  ngOnInit(): void {
    this.checkIsAdmin()
  }
  logOutUser(){
    this.login.loggedout()
  }
}
