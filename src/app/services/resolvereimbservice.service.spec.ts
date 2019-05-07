import { TestBed } from '@angular/core/testing';

import { ResolvereimbserviceService } from './resolvereimbservice.service';

describe('ResolvereimbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolvereimbserviceService = TestBed.get(ResolvereimbserviceService);
    expect(service).toBeTruthy();
  });
});
