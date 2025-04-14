import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const unauthGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router); //Injeccion de un servicio, solo que es en caso de funcion y no de clase(constructor)
  const authService: AuthService = inject(AuthService);

  if(!authService.isLoggedIn()){
    return true;
  }else{
    router.navigate(['/']);
    return false;
  }
};