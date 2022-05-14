import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFrontComponent } from './test-front.component';

describe('TestFrontComponent', () => {
  let component: TestFrontComponent;
  let fixture: ComponentFixture<TestFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
