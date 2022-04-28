import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecombackComponent } from './showrecomback.component';

describe('ShowrecombackComponent', () => {
  let component: ShowrecombackComponent;
  let fixture: ComponentFixture<ShowrecombackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrecombackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecombackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
