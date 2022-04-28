import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownewsComponent } from './shownews.component';

describe('ShownewsComponent', () => {
  let component: ShownewsComponent;
  let fixture: ComponentFixture<ShownewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
