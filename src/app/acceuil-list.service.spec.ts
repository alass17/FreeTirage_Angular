import { TestBed } from '@angular/core/testing';

import { AcceuilListService } from './acceuil-list.service';

describe('AcceuilListService', () => {
  let service: AcceuilListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceuilListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
