import {Component} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">

  <animal-list [childAnimalList]="masterAnimalList"><h1>Welcome to Oregon ZOO</h1></animal-list>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  testAnimal: Animal = new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises");
  masterAnimalList: Animal[] = [this.testAnimal];


  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }
  // Component logic
}
