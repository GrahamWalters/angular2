import { TestBed, inject } from '@angular/core/testing';
import { AboutUserResolve } from './about-user-resolve.service';

describe('AboutUsersResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUserResolve]
    });
  });

  it('should ...', inject([AboutUserResolve], (service: AboutUserResolve) => {
    expect(service).toBeTruthy();
  }));
});
