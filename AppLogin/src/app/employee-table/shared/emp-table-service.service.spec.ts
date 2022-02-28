import { TestBed } from '@angular/core/testing';

import { EmpTableServiceService } from './emp-table-service.service';

describe('EmpTableServiceService', () => {
  let service: EmpTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
