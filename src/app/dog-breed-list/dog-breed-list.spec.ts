import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogBreedList } from './dog-breed-list';

describe('DogBreedList', () => {
  let component: DogBreedList;
  let fixture: ComponentFixture<DogBreedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogBreedList],
    }).compileComponents();

    fixture = TestBed.createComponent(DogBreedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
