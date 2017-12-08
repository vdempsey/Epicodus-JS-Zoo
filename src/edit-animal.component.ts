import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Edit: {{childSelectedAnimal.name}}</h3>
    <input [(ngModel)]="childSelectedAnimal.species">
    <br>
    <input [(ngModel)]="childSelectedAnimal.name">
    <br>
    <input [(ngModel)]="childSelectedKeg.age">
    <br>
    <input [(ngModel)]="childSelectedKeg.diet">
    <br>
    <input [(ngModel)]="childSelectedKeg.location">
    <br>
    <input [(ngModel)]="childSelectedKeg.caretakers">
    <br>
    <input [(ngModel)]="childSelectedAnimal.sex">
    <br>
    <input [(ngModel)]="childSelectedAnimal.likes">
    <br>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
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
