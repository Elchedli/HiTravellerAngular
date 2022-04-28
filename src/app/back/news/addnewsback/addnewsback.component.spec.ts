import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsbackComponent } from './addnewsback.component';

describe('AddnewsbackComponent', () => {
  let component: AddnewsbackComponent;
  let fixture: ComponentFixture<AddnewsbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewsbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
