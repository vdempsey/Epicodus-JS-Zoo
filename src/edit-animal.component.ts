import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="edit-form" *ngIf="childSelectedAnimal">
    <h3>Edit: {{childSelectedAnimal.name}}</h3>
    <input [(ngModel)]="childSelectedAnimal.species">
    <br>
    <input [(ngModel)]="childSelectedAnimal.name">
    <br>
    <input [(ngModel)]="childSelectedAnimal.age">
    <br>
    <input [(ngModel)]="childSelectedAnimal.diet">
    <br>
    <input [(ngModel)]="childSelectedAnimal.location">
    <br>
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <br>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <br>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <br>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <br>
    <input [(ngModel)]="childSelectedAnimal.url">
    <br>
    <button (click)="doneButtonHasBeenClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneSender = new EventEmitter();

  doneButtonHasBeenClicked(){
    this.doneSender.emit();
  }
}
