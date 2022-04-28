import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecomComponent } from './addrecom.component';

describe('AddrecomComponent', () => {
  let component: AddrecomComponent;
  let fixture: ComponentFixture<AddrecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
