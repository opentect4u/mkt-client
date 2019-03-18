import { TestBed } from '@angular/core/testing';

import { PassvalueService } from './passvalue.service';

describe('PassvalueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassvalueService = TestBed.get(PassvalueService);
    expect(service).toBeTruthy();
  });
});
