import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownewsbackComponent } from './shownewsback.component';

describe('ShownewsbackComponent', () => {
  let component: ShownewsbackComponent;
  let fixture: ComponentFixture<ShownewsbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownewsbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownewsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
