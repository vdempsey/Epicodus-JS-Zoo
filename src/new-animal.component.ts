import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

    <h3>Add Animal</h3>
    <label>Species</label>
    <input type="text" #animalSpecies>
    <br><label>Name</label>
    <input type="text" #animalName>
    <br><label>Age</label>
    <input type="text" #animalAge>
    <br><label>Diet</label>
    <input type="text" #animalDiet>
    <br><label>Location</label>
    <input type="text" #animalLocation>
    <br><label>Caretakers</label>
    <input type="text" #animalCaretakers>
    <br><label>Sex</label>
    <input type="text" #animalSex>
    <br><label>Likes</label>
    <input type="text" #animalLikes>
    <br><label>Dislikes</label>
    <input type="text" #animalDislikes>
    <br>
    <label for="file">Img Url</label>
    <input type="text" #animalUrl>
    <button (click)="submitForm(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value, animalUrl.value); animalSpecies.value=''; animalName.value=''; animalAge.value=''; animalDiet.value=''; animalLocation.value=''; animalCaretakers.value=''; animalSex.value=''; animalLikes.value=''; animalDislikes.value=''; animalUrl.value=''">Add</button>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, url: string) {
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, url);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
