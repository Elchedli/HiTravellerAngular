import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomdetailsComponent } from './recomdetails.component';

describe('RecomdetailsComponent', () => {
  let component: RecomdetailsComponent;
  let fixture: ComponentFixture<RecomdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
