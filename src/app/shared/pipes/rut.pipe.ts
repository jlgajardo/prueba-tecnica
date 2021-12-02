import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  transform(value: any, args?: any): any {


    if (value === '-') {
      return;
    }
    const dot = /\./gi;
    const dash = /-/gi;
    const colon = /,/gi;
    const nuevoRut = value.replaceAll(dot, '').replaceAll(dash, '');


    const dv = `-${nuevoRut.substr(nuevoRut.length - 1)}`.toUpperCase();


    const rutArray = Array.from(
      nuevoRut.substr(0, nuevoRut.length - 1)
    ).reverse();
    let rutFinal: any[] = [];
    let vuelta = 0;
    let rutAux = [];

    rutArray.forEach((e) => {
      if (vuelta === 3) {
        rutAux = ['.', ...rutFinal];
        rutFinal = rutAux;
        vuelta = 0;
      }
      rutAux = [e, ...rutFinal];

      rutFinal = rutAux;
      vuelta++;
    });


    return `${rutFinal.toString().replace(colon, '')}${dv}`;
  }

}
