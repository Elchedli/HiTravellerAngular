import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvoyageComponent } from './getvoyage.component';

describe('GetvoyageComponent', () => {
  let component: GetvoyageComponent;
  let fixture: ComponentFixture<GetvoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetvoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetvoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
