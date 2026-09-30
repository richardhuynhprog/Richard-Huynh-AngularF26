import { Component, input } from '@angular/core';

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
}
