import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpartnersbackComponent } from './listpartnersback.component';

describe('ListpartnersbackComponent', () => {
  let component: ListpartnersbackComponent;
  let fixture: ComponentFixture<ListpartnersbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpartnersbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpartnersbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
