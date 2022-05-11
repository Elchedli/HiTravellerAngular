import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProfileComponent } from './read-profile.component';

describe('ReadProfileComponent', () => {
  let component: ReadProfileComponent;
  let fixture: ComponentFixture<ReadProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
