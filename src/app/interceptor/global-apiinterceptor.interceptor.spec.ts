import { TestBed } from '@angular/core/testing';

import { GlobalApiinterceptorInterceptor } from './global-apiinterceptor.interceptor';

describe('GlobalApiinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlobalApiinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlobalApiinterceptorInterceptor = TestBed.inject(GlobalApiinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
