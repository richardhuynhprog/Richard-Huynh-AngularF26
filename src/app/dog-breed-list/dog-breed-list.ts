import { Component, inject } from '@angular/core';
import { DogBreedListItem } from '../dog-breed-list-item/dog-breed-list-item';
import { DogBreedService } from '../services/dog-breed';
import { DogEvent } from '../dog-event';

@Component({
  selector: 'app-dog-breed-list',
  standalone: true,
  imports: [DogBreedListItem],
  templateUrl: './dog-breed-list.html',
  styleUrl: './dog-breed-list.scss',
})
export class DogBreedList {
  private dogBreedService = inject(DogBreedService);

  protected title: string = 'Kind of Dogs';
  protected dogList = this.dogBreedService.dogList;

  protected openedDogIds: number[] = [];

  onDogEvent(event: DogEvent) {
    console.log(`Dog ${event.id} was ${event.action}`);

    if (event.action === 'opened' && !this.openedDogIds.includes(event.id)) {
      this.openedDogIds.push(event.id);
    }
  }
}
