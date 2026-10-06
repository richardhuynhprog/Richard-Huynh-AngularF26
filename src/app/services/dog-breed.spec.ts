import { TestBed } from '@angular/core/testing';
import { DogBreed } from './dog-breed';

describe('DogBreed', () => {
  let service: DogBreed;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogBreed);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
