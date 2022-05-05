import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstripsFrontComponent } from './detailstrips-front.component';

describe('DetailstripsFrontComponent', () => {
  let component: DetailstripsFrontComponent;
  let fixture: ComponentFixture<DetailstripsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstripsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstripsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
