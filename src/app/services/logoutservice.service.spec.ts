import { TestBed } from '@angular/core/testing';

import { LogoutserviceService } from './logoutservice.service';

describe('LogoutserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogoutserviceService = TestBed.get(LogoutserviceService);
    expect(service).toBeTruthy();
  });
});
