import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AnimalAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge){
    let output: Animal[] = [];

    if (desiredAge === "All Ages"){
      return input;
    } else {
      for ( let i = 0; i < input.length; i++){
        if (desiredAge === "young") {
          if (input[i].age <= 2) {
            output.push(input[i]);
        } else if (desiredAge === "old") {
          if (input[i].age >= 8) {
            output.push(input[i]);
        } else {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
}
}
