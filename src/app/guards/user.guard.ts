import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthinticationService } from '../service/authintication.service';

export const userGuard: CanActivateFn = (route, state) => {
  let router:Router = inject(Router)
  let auth:AuthinticationService = inject(AuthinticationService)
  if(auth.loginflag){
    return true 
  }
  router.navigate(['/auth/login'])
  return false
};
 