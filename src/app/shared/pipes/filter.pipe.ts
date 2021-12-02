import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], filterString: string, value: string): any {


    if (data.length === 0 || filterString === '') {
      return data
    }
    return data.filter(e => e[value].toLowerCase().includes(filterString.toLowerCase()));
  }
}
