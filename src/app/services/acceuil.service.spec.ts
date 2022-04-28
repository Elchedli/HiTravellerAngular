import { TestBed } from '@angular/core/testing';

import { AcceuilService } from './acceuil.service';

describe('AcceuilService', () => {
  let service: AcceuilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
