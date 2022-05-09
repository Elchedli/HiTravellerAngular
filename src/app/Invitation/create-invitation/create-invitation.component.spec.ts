import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvitationComponent } from './create-invitation.component';

describe('CreateInvitationComponent', () => {
  let component: CreateInvitationComponent;
  let fixture: ComponentFixture<CreateInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
