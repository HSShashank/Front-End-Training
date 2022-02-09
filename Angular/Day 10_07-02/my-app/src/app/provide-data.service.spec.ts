import { TestBed } from '@angular/core/testing';

import { ProvideDataService } from './provide-data.service';

describe('ProvideDataService', () => {
  let service: ProvideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
