import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogBreed } from './shared/models/dog-breed';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected title: String = 'Kind of Dogs';

  protected dogList: DogBreed[] = [
    {
      name: 'Border Collie',
      colour: 'white and tan',
      id: 7,
      weight: 70,
      hypoallergenic: true,
    },
    {
      name: 'Dog2',
      colour: 'blue',
      id: 5,
      weight: 80,
      hypoallergenic: true,
    },
    {
      name: 'Boggie',
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
      name: 'Dog3',
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
  ];
}
