import { TestBed, inject } from '@angular/core/testing';

import { HnFetchService } from './hn-fetch.service';

describe('HnFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnFetchService]
    });
  });

  it('should be created', inject([HnFetchService], (service: HnFetchService) => {
    expect(service).toBeTruthy();
  }));
});
