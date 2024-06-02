import { TestBed } from '@angular/core/testing';

import { SearchServiceServiceService } from './search-service.service.service';

describe('SearchServiceServiceService', () => {
  let service: SearchServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
