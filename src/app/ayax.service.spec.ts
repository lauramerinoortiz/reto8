import { TestBed } from '@angular/core/testing';

import { AyaxService } from './ayax.service';

describe('AyaxService', () => {
  let service: AyaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
