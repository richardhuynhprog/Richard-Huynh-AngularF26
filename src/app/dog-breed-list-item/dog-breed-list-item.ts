import { Component, input, output } from '@angular/core';
import { DogBreed } from '../dog-breed';
import { DogEvent } from '../dog-event';

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
    this.dogClicked.emit({ id: this.dog().id, action: 'opened' });
  }

  onDeleteClick(event: MouseEvent) {
    event.stopPropagation(); // prevent the card's own click (onCardClick) from also firing
    this.dogClicked.emit({ id: this.dog().id, action: 'removed' });
  }
}
