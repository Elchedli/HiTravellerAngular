import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  hasError: boolean;
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hasError = false;
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
    console.log(this.router.url);
  }

  setPassword(form: FormGroup): void {
    if (!this.formGroup.valid) {
      this.hasError = true;
      return;
    }
    this.userService
      .resetPassword(form.value, this.router.url)
      .subscribe((res) => {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      });
    this.router.navigate(['login']);
  }
}
