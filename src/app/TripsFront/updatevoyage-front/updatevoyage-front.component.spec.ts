import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevoyageFrontComponent } from './updatevoyage-front.component';

describe('UpdatevoyageFrontComponent', () => {
  let component: UpdatevoyageFrontComponent;
  let fixture: ComponentFixture<UpdatevoyageFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevoyageFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevoyageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
