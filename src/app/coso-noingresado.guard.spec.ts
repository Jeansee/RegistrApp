import { TestBed } from '@angular/core/testing';
import { CosoNoIngresadoGuard } from './coso-noingresado.guard';

describe('CosoNoingresadoGuard', () => {
  let guard: CosoNoingresadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CosoNoingresadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
