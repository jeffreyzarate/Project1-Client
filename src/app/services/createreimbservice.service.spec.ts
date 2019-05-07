import { TestBed } from '@angular/core/testing';

import { CreatereimbserviceService } from './createreimbservice.service';

describe('CreatereimbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatereimbserviceService = TestBed.get(CreatereimbserviceService);
    expect(service).toBeTruthy();
  });
});
