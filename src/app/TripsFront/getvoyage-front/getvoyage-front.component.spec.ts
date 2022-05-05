import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvoyageFrontComponent } from './getvoyage-front.component';

describe('GetvoyageFrontComponent', () => {
  let component: GetvoyageFrontComponent;
  let fixture: ComponentFixture<GetvoyageFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetvoyageFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetvoyageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
