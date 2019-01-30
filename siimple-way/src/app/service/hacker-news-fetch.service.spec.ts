import { TestBed } from '@angular/core/testing';

import { HackerNewsFetchService } from './hacker-news-fetch.service';

describe('HackerNewsFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackerNewsFetchService = TestBed.get(HackerNewsFetchService);
    expect(service).toBeTruthy();
  });
});
