import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  forgetPassword() {
    this.userService.forgotPassword(this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.forgetPassword();
    this.router.navigate(['/login']);
  }
}
