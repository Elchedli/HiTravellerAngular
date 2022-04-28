import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddadsbackComponent } from './addadsback.component';

describe('AddadsbackComponent', () => {
  let component: AddadsbackComponent;
  let fixture: ComponentFixture<AddadsbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadsbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
