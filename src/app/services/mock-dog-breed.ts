import { Injectable, signal, computed, inject } from '@angular/core';
import { DogBreed } from '../dog-breed';
import { APP_CONFIG } from '../shared/app-config';

@Injectable() // no providedIn: it's handed out via the providers array
export class MockDogBreedService {
  private config = inject(APP_CONFIG);
  dataSourceUrl = this.config.apiBaseUrl;

  private dogs = signal<DogBreed[]>([
    { name: 'MOCK Dog A', colour: 'purple', id: 1, weight: 10, hypoallergenic: true },
    { name: 'MOCK Dog B', colour: 'green', id: 2, weight: 20, hypoallergenic: false },
  ]);

  dogList = this.dogs.asReadonly();

  hypoallergenicDogs = computed(() => this.dogs().filter((dog) => dog.hypoallergenic === true));

  hypoallergenicSummary = computed(
    () => `${this.hypoallergenicDogs().length} hypoallergenic breed(s) match`,
  );

  addDog(d: DogBreed) {
    this.dogs.update((list) => [...list, d]);
  }

  removeDog(id: number) {
    this.dogs.update((list) => list.filter((dog) => dog.id !== id));
  }
}
