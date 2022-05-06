import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcomplexeComponent } from './chatcomplexe.component';

describe('ChatcomplexeComponent', () => {
  let component: ChatcomplexeComponent;
  let fixture: ComponentFixture<ChatcomplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatcomplexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcomplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
