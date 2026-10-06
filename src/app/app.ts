import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogBreed } from './shared/models/dog-breed';
import { JsonPipe, NgForOf } from '@angular/common';

import { DogBreedList } from './dog-breed-list/dog-breed-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, DogBreedList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'User Generation';
}
