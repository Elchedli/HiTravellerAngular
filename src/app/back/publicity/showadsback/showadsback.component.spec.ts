import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowadsbackComponent } from './showadsback.component';

describe('ShowadsbackComponent', () => {
  let component: ShowadsbackComponent;
  let fixture: ComponentFixture<ShowadsbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowadsbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowadsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
