import { TestBed } from '@angular/core/testing';

import { IonicRestService } from './ionic-rest.service';

describe('IonicRestService', () => {
  let service: IonicRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
