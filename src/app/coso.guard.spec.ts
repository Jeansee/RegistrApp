import { TestBed } from '@angular/core/testing';

import { CosoGuard } from './coso.guard';

describe('CosoGuard', () => {
  let guard: CosoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CosoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
