import { Component, input, output } from '@angular/core';
import { DogEvent } from '../dog-event';

interface DogBreed {
  name: string;
  colour: string;
  id: number;
  weight: number;
  hypoallergenic?: boolean;
}


@Component({
  selector: 'app-dog-breed-list-item',
  standalone: true,
  imports: [],
  templateUrl: './dog-breed-list-item.html',
  styleUrl: './dog-breed-list-item.scss',
})
export class DogBreedListItem {
  dog = input.required<DogBreed>();
  dogClicked = output<DogEvent>();

  onCardClick() {
    this.dogClicked.emit({
      id: this.dog().id,
      action: 'opened',
    });
  }
}
