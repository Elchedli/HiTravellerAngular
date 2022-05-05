import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofemploComponent } from './listofemplo.component';

describe('ListofemploComponent', () => {
  let component: ListofemploComponent;
  let fixture: ComponentFixture<ListofemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
