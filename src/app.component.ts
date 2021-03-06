import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
    <div class="animal-list">
      <animal-list [childAnimalList]="masterAnimalList" (editSender)="editAnimal($event)" (removeSender)="removeAnimal($event)"></animal-list>
    </div>
    <div class = "form-wrap">
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneSender)="finishEdit()"></edit-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  initialAnimalOne: Animal = new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "http://www.defenders.org/sites/default/files/styles/homepage-feature-2015/public/arctic-fox_joan-m-hellquist.png?itok=GLAlIWpn");
  initialAnimalTwo: Animal = new Animal("Arctic Bear", "Moon", 5, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "http://www.defenders.org/sites/default/files/styles/homepage-feature-2015/public/arctic-fox_joan-m-hellquist.png?itok=GLAlIWpn");
  initialAnimalThree: Animal = new Animal("Arctic Sheep", "Moon", 10, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "http://www.defenders.org/sites/default/files/styles/homepage-feature-2015/public/arctic-fox_joan-m-hellquist.png?itok=GLAlIWpn");
  masterAnimalList: Animal[] = [this.initialAnimalOne, this.initialAnimalTwo, this.initialAnimalThree];
  selectedAnimal = null;


  addAnimal(newAnimalFromChild: Animal){
  this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishEdit(clickedAnimal) {
    this.selectedAnimal = null;
  }

  removeAnimal(clickedAnimal){
  let animalIndex = this.masterAnimalList.indexOf(clickedAnimal);
  if (animalIndex > -1) {
    this.masterAnimalList.splice(animalIndex, 1);
  }
}
}
