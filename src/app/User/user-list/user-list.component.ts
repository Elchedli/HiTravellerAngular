import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: Observable<User[]>;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    let jwt = localStorage.getItem('access_token');
    if (jwt == null || this.authService.isTokenExpired(jwt)) {
      this.router.navigate(['login']);
    }
    this.reloadData();
  }

  banUser(id: number) {
    this.userService.banUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  userDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['update', id]);
  }
}
