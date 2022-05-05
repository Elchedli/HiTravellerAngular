import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetusertotripsComponent } from './getusertotrips.component';

describe('GetusertotripsComponent', () => {
  let component: GetusertotripsComponent;
  let fixture: ComponentFixture<GetusertotripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetusertotripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetusertotripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
