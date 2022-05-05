import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatclassiqueComponent } from './chatclassique.component';

describe('ChatclassiqueComponent', () => {
  let component: ChatclassiqueComponent;
  let fixture: ComponentFixture<ChatclassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatclassiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatclassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
