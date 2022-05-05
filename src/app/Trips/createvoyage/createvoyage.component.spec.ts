import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevoyageComponent } from './createvoyage.component';

describe('CreatevoyageComponent', () => {
  let component: CreatevoyageComponent;
  let fixture: ComponentFixture<CreatevoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
