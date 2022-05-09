import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  save() {
    this.userService.createCompany(this.user).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;

    this.save();
    this.login();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
  login() {
    this.router.navigate(['/verify']);
  }
}
