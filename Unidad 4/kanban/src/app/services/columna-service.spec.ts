import { TestBed } from '@angular/core/testing';

import { Columna } from '../models/columna';

describe('Columna', () => {
  let service: Columna;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Columna);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
