import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogBreedListItem } from './dog-breed-list-item';

describe('DogBreedListItem', () => {
  let component: DogBreedListItem;
  let fixture: ComponentFixture<DogBreedListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogBreedListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(DogBreedListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
