import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecombackComponent } from './addrecomback.component';

describe('AddrecombackComponent', () => {
  let component: AddrecombackComponent;
  let fixture: ComponentFixture<AddrecombackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecombackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecombackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
