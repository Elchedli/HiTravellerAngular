import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrecombackComponent } from './modifyrecomback.component';

describe('ModifyrecombackComponent', () => {
  let component: ModifyrecombackComponent;
  let fixture: ComponentFixture<ModifyrecombackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyrecombackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyrecombackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
