import { Invitation } from '../../model/invitation';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ListComponent } from '../list/list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { InvitationService } from 'src/app/services/invitation.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-details-invitation',
  templateUrl: './details-invitation.component.html',
  styleUrls: ['./details-invitation.component.css'],
})
export class DetailsInvitationComponent implements OnInit {
  id!: number;
  invitation!: Invitation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invitationService: InvitationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let jwt = localStorage.getItem('access_token');
    if (jwt == null || this.authService.isTokenExpired(jwt)) {
      this.router.navigate(['login']);
    }
    this.invitation = new Invitation();

    this.id = this.route.snapshot.params['id'];

    this.invitationService.getInvitation(this.id).subscribe(
      (data) => {
        console.log(data);
        this.invitation = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(['invitations']);
  }
}
