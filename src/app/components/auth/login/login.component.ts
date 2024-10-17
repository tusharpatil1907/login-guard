import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthinticationService } from '../../../service/authintication.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../Interfaces/User';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private formbuilder: FormBuilder ,private login: AuthinticationService, private router: Router){}
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']
    });
  }


  userlogin(){
    console.log('done:', this.loginForm.value)
    let userfoundarray:User[] 
    this.login.getUser().subscribe({
    next:(res)=>{
        if(Array.isArray(res)){
          userfoundarray = res.filter((result)=>result.email === this.loginForm.value.email && result.password === this.loginForm.value.password);
          console.log(userfoundarray)
          if(userfoundarray[0]){
            console.log(userfoundarray[0])
            alert('Looged in')
            this.login.loggedin(userfoundarray[0])
            this.router.navigate(['/'])
          }else{
            alert('user not exist kindly register')
            this.router.navigate(['/auth/signup'])
          }
        }
      },
      error:(err)=>{console.log(err)},
      complete:()=>console.log('done login')

  })
  }







}
