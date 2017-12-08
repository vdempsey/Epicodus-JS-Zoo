import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <select (change)="onChange($event.target.value)">
  <option value="All Ages">All Ages</option>
  <option value="young">young</option>
  <option value="average">average</option>
  <option value="old">old</option>
  </select>
  <div *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <p>Species: {{currentAnimal.species}}</p>
      <p>Name: {{currentAnimal.name}}</p>
      <p>Age: {{currentAnimal.age}}</p>
      <p>Diet: {{currentAnimal.diet}}</p>
      <p>Location: {{currentAnimal.location}}</p>
      <p>Caretakers: {{currentAnimal.caretakers}}</p>
      <p>Sex: {{currentAnimal.sex}}</p>
      <p>Likes: {{currentAnimal.likes}}</p>
      <p>Dislikes: {{currentAnimal.dislikes}}</p>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      <button (click)="removeAnimalButtonHasBeenClicked(currentAnimal)">Remove</button>
    </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  // @Input() childTaproomEmployee: boolean;
  @Output() editSender = new EventEmitter();
  // @Output() userSender = new EventEmitter();
  @Output() removeSender = new EventEmitter();
  // @Output() sellSender = new EventEmitter();

  filterByAge: string = "All Ages";


  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  // changeUserButtonHasBeenClicked(){
  //   this.userSender.emit();
  // }
  editButtonHasBeenClicked(animalToEdit: Animal){
    this.editSender.emit(animalToEdit);
  }
  removeAnimalButtonHasBeenClicked(animalToRemove: Animal){
    this.removeSender.emit(animalToRemove);
  }

}
