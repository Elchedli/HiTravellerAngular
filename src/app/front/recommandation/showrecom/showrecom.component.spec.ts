import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecomComponent } from './showrecom.component';

describe('ShowrecomComponent', () => {
  let component: ShowrecomComponent;
  let fixture: ComponentFixture<ShowrecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
