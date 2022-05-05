import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevoyageComponent } from './updatevoyage.component';

describe('UpdatevoyageComponent', () => {
  let component: UpdatevoyageComponent;
  let fixture: ComponentFixture<UpdatevoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
