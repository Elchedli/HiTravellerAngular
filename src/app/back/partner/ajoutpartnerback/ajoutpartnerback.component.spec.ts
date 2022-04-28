import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpartnerbackComponent } from './ajoutpartnerback.component';

describe('AjoutpartnerbackComponent', () => {
  let component: AjoutpartnerbackComponent;
  let fixture: ComponentFixture<AjoutpartnerbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpartnerbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpartnerbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
