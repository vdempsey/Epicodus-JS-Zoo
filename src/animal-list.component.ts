import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <div class="animal-list-container">
    <select (change)="onChange($event.target.value)">
      <option value="All Ages">All Ages</option>
      <option value="young">2 years old and younger</option>
      <option value="average">over 2 and less than 9 years old</option>
      <option value="old">over 9 years old</option>
    </select>
    <ul>
      <li class="animal" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
        <div class="animalImg">
        <img src='{{currentAnimal.url}}'>
        </div>
        <div class="animal-info">
          <p>Species: {{currentAnimal.species}}</p>
          <p>Name: {{currentAnimal.name}}</p>
          <p>Age: {{currentAnimal.age}}</p>
          <p>Diet: {{currentAnimal.diet}}</p>
          <p>Location: {{currentAnimal.location}}</p>
          <p>Caretakers: {{currentAnimal.caretakers}}</p>
          <p>Sex: {{currentAnimal.sex}}</p>
          <p>Likes: {{currentAnimal.likes}}</p>
          <p>Dislikes: {{currentAnimal.dislikes}}</p>
        </div>
        <div class="animal-buttons"><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
        <button (click)="removeAnimalButtonHasBeenClicked(currentAnimal)">Remove</button></div>
      </li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editSender = new EventEmitter();
  @Output() removeSender = new EventEmitter();

  filterByAge: string = "All Ages";


  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.editSender.emit(animalToEdit);
  }
  removeAnimalButtonHasBeenClicked(animalToRemove: Animal){
    this.removeSender.emit(animalToRemove);
  }

}
