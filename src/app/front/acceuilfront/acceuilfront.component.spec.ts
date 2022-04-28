import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilfrontComponent } from './acceuilfront.component';

describe('AcceuilfrontComponent', () => {
  let component: AcceuilfrontComponent;
  let fixture: ComponentFixture<AcceuilfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
