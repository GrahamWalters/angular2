import { TestBed, inject } from '@angular/core/testing';
import { AboutUsersResolve } from './about-users-resolve.service';

describe('AboutUsersResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUsersResolve]
    });
  });

  it('should ...', inject([AboutUsersResolve], (service: AboutUsersResolve) => {
    expect(service).toBeTruthy();
  }));
});
