import { TestBed } from '@angular/core/testing';

import { MergeApiService } from './merge-api.service';

describe('MergeApiService', () => {
  let service: MergeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
