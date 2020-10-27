import { TestBed } from '@angular/core/testing';

import { RoutTrainAngularService } from './rout-train-angular.service';

describe('RoutTrainAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutTrainAngularService = TestBed.get(RoutTrainAngularService);
    expect(service).toBeTruthy();
  });
});
