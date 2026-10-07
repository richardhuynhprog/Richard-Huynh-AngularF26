import { computed, effect, Injectable, signal } from '@angular/core';
import { DogBreed } from '../dog-breed';

@Injectable({ providedIn: 'root' })
export class DogBreedService {
  private dogs = signal<DogBreed[]>([
    {
      name: 'Border Collie',
      colour: 'white and tan',
      id: 7,
      weight: 70,
      hypoallergenic: true,
    },
    {
      name: 'Blue Heeler',
      colour: 'blue',
      id: 5,
      weight: 80,
      hypoallergenic: true,
    },
    {
      name: 'Clifford',
      colour: 'red',
      id: 11,
      weight: 120,
      hypoallergenic: false,
    },
    {
      name: 'Pitbull',
      colour: 'white and black',
      id: 18,
      weight: 50,
    },
    {
      name: 'Boxer',
      colour: 'tan',
      id: 87,
      weight: 23,
      hypoallergenic: false,
    },
    {
      name: 'Terrier',
      colour: 'brown',
      id: 45,
      weight: 42,
      hypoallergenic: true,
    },
  ]);

  //read-only signal
  dogList = this.dogs.asReadonly();

  //computed() 1
  hypoallergenicDogs = computed(() => this.dogs().filter((dog) => dog.hypoallergenic === true));
  //computed() 2
  hypoallergenicSummary = computed(() => `${this.hypoallergenicDogs().length} hypoallergenic breed(s) match`,
  );
  //effect()
  constructor() {
    effect(() => {
      console.log('Dog count is now', this.dogList().length);
    });
  }
  //add() and update()
  addDog(d: DogBreed) {
    this.dogs.update((list) => [...list, d]);
  }
  removeDog(id: number) {
    this.dogs.update(list =>list.filter(dog=> dog.id !== id));
  }
}
