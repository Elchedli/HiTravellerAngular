import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmyTripsComponent } from './getmy-trips.component';

describe('GetmyTripsComponent', () => {
  let component: GetmyTripsComponent;
  let fixture: ComponentFixture<GetmyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmyTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
