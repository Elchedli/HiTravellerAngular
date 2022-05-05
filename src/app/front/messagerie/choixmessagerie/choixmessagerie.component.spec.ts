import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixmessagerieComponent } from './choixmessagerie.component';

describe('ChoixmessagerieComponent', () => {
  let component: ChoixmessagerieComponent;
  let fixture: ComponentFixture<ChoixmessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixmessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixmessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
