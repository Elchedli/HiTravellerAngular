import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevoyageFrontComponent } from './createvoyage-front.component';

describe('CreatevoyageFrontComponent', () => {
  let component: CreatevoyageFrontComponent;
  let fixture: ComponentFixture<CreatevoyageFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevoyageFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevoyageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
