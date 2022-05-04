import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsdetailsComponent } from './adsdetails.component';

describe('AdsdetailsComponent', () => {
  let component: AdsdetailsComponent;
  let fixture: ComponentFixture<AdsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
