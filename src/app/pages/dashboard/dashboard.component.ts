import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoggedIn: boolean = true;

  constructor(private authService: AuthService, private router: Router){
    this.authService.status.subscribe((status: boolean)=>{
      this.isLoggedIn = status;
    });
  }

  logout(){
    this.authService.delete();
    this.router.navigate(['/login']);
  }
}
