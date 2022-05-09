import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvitationComponent } from './update-invitation.component';

describe('UpdateInvitationComponent', () => {
  let component: UpdateInvitationComponent;
  let fixture: ComponentFixture<UpdateInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
