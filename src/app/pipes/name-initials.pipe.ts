import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {
  
  transform(value: any, _args?: any): any {
    if (value) {
      //splits words to array
      var nameArray = value.split(" ");

      var initials = '';

      //if it's a single word, return 1st and 2nd character
      if (nameArray.length === 1) {
        return nameArray[0].charAt(0) + "" + nameArray[0].charAt(1);
      } else {
        initials = nameArray[0].charAt(0);
      }
      //else it's more than one, concat the initials in a loop
      //we've gotten the first word, get the initial of the last word

      //first word
      for (let i = (nameArray.length - 1); i < nameArray.length; i++) {
        initials += nameArray[i].charAt(0);
      }
      //return capitalized initials
      return initials.toUpperCase();
    }

  }
}
