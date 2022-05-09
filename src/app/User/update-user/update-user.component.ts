import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
        this.user.password = '';
      },
      (error) => console.log(error)
    );
  }

  updateEmployee() {
    this.userService.updateUser(this.user, this.id).subscribe(
      (data) => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
