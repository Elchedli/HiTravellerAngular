import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripsCompanyComponent } from './get-trips-company.component';

describe('GetTripsCompanyComponent', () => {
  let component: GetTripsCompanyComponent;
  let fixture: ComponentFixture<GetTripsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
