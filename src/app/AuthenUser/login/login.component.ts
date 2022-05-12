import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  err: number = 0;
  jwToken: string;
  submitted = false;

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {}

  onLoggedin() {
    this.authService.login(this.user).subscribe((res) => {
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
      localStorage.setItem('username', res.username);
      localStorage.setItem('role', res.role);

      if (res.role === '[ROLE_ADMIN]') {
        this.router.navigate(['/users']).then(() => {
          window.location.reload();
        });
      } else if (res.role === '[ROLE_COMPANY]') {
        this.router.navigate(['/invitations']).then(() => {
          window.location.reload();
        });
      } else if (res.role === '[ROLE_EMPLOYEE]') {
        this.router.navigate(['/menuFront']).then(() => {
          window.location.reload();
        });
      }
    });
  }
  forgetPassword() {
    this.router.navigate(['/forgetPassword']);
  }
  onSubmit() {
    this.submitted = true;
    this.onLoggedin();
  }
  signUp() {
    this.router.navigate(['signUp']);
  }
}
