import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <div>
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
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  // @Input() childTaproomEmployee: boolean;
  // @Output() editSender = new EventEmitter();
  // @Output() userSender = new EventEmitter();
  // @Output() removeSender = new EventEmitter();
  // @Output() sellSender = new EventEmitter();

  // filterByStyle: string = "All Beers";



  // onChange(optionFromMenu){
  //   this.filterByStyle = optionFromMenu;
  // }

  // changeUserButtonHasBeenClicked(){
  //   this.userSender.emit();
  // }
  // editButtonHasBeenClicked(kegToEdit: Keg){
  //   this.editSender.emit(kegToEdit);
  // }
  // removeKegButtonHasBeenClicked(kegToRemove: Keg){
  //   this.removeSender.emit(kegToRemove);
  // }






}
