import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { User } from '../../Interfaces/User';
import { AuthinticationService } from '../../../service/authintication.service';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup
  constructor(private formBuilder: FormBuilder, private login:AuthinticationService, private router: Router){} 
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      role:[],
    });
  }
  onSubmit(){
    console.log(this.signUpForm.value)
    console.log(this.login.isUserFresh(this.signUpForm.value))


    if(this.login.isUserFresh(this.signUpForm.value)){
      alert('user exist in database');
      this.router.navigate(['/auth/login'])
    } else{ this.login.setUser(this.signUpForm.value)?.subscribe({
      next:(response)=>{  
        console.log('done',response);
        alert('Registration Success kindly login')
        this.router.navigate(['/auth/login']);
      },
      error:(error)=>console.log("error in api: ",error),
      complete:()=>{
        // console.log('done');
        
      }
    });
    }
  }


 

}
