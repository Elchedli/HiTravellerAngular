import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InvitationService } from '../../services/invitation.service';
import { Invitation } from '../../model/invitation';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  invitations!: Invitation[];
  path = '../../assets/images/invitations/';

  constructor(
    private invitationService: InvitationService,
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

  deleteInvitation(id: number) {
    this.invitationService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  save() {
    this.router.navigate(['/createInvitation']);
  }

  reloadData() {
    this.invitationService.getList().subscribe((data) => {
      this.invitations = data;
    });
  }

  invitationDetails(id: number) {
    this.router.navigate(['detailsInvitation', id]);
  }
}
