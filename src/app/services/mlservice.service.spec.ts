import { TestBed } from '@angular/core/testing';

import { MlserviceService } from './mlservice.service';

describe('MlserviceService', () => {
  let service: MlserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
