import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInvitationComponent } from './delete-invitation.component';

describe('DeleteInvitationComponent', () => {
  let component: DeleteInvitationComponent;
  let fixture: ComponentFixture<DeleteInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
