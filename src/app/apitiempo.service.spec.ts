import { TestBed } from '@angular/core/testing';

import { ApitiempoService } from './apitiempo.service';

describe('ApitiempoService', () => {
  let service: ApitiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
