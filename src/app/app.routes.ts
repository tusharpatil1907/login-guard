import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {path: '',component: DashboardComponent, canActivate:[userGuard]},
    {path: 'auth', children:[
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent},
        ] 
    }
];
