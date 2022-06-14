import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proficiency'
})
export class ProficiencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
