import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { User } from '../components/Interfaces/User';
import { FormGroup } from '@angular/forms';
import { count } from 'console';
import { response, Router } from 'express';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthinticationService {
  // userData!:User;
  constructor(private http: HttpClient) { }
   getUser() {
    return  this.http.get<User>('http://localhost:3000/users');
  }
  setUser(userData: User) {
    if (userData) {
      return this.http.post<User>('http://localhost:3000/users', userData);
    } else return
  }
  testvar!: any
  // userCount: Subject<number> = new Subject()
   isUserFresh(formData: User): User[] {
    var filtered:any

    // console.log('in service',formData)
  
    let userData: User;
     this.getUser().subscribe((resp:User) => {
         userData = resp
        console.log('api fetched')
        if (Array.isArray(userData)) {
          filtered = userData.filter(f=> { return f.email === formData.email  }
        );
        
      }
    }
  );
  
  // console.log(filtered)
      return filtered
  
  }

  
  loginflag: boolean  = false
  loogedInUserData!:User|null
  loggedin(userData:User){
    this.loogedInUserData = userData
    return this.loginflag = true
  }

  loggedout(){
    this.loogedInUserData = null  
    return this.loginflag = false
  }
  

}



