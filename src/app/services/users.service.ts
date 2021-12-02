import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }


  findAllUsers() {

    return this.http.get<UserModel[]>('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user')
      .pipe(map((users) => {


        return users.map((user: any) => {

          const {comuna, nombre} = user.direccion
          return {
            ...user,
            fechaNacimiento: this.isValidDate(user.fechaNacimiento),
            rutValido: this.retornaDV(user.rut),
            direccion: {
              ...user.direccion,
              comuna: comuna ? comuna : nombre
            }
          }
        })
      }))
  }


  isValidDate(date: string) {

    const [day, month, year] = date.split('/')

    if (parseInt(day) <= 0 || parseInt(day) >= 32) {
      return 'Fecha Invalida'
    }
    if (parseInt(month) <= 0 || parseInt(month) >= 13) {
      return 'Fecha Invalida'
    }


    if (parseInt(year) <= 0 || parseInt(year) > new Date().getFullYear()) {
      return 'Fecha Invalida'
    }
    return date
  }


  private retornaDV(rut: any): any {

    const dot = /\./gi;
    const dash = /-/gi;
    const nuevoRut = rut.replaceAll(dot, '').replaceAll(dash, '');
    const dv = `${nuevoRut.substr(nuevoRut.length - 1)}`.toLocaleLowerCase();
    let dvValido
    const rutArray = Array.from(
      nuevoRut.substr(0, nuevoRut.length - 1)
    ).reverse();


    let multiplicador = 2;
    let total = 0;
    rutArray.forEach(digito => {


      total += Number(digito) * multiplicador;
      multiplicador++;
      if (multiplicador === 8) {
        multiplicador = 2;
      }

    });

    const dvCalculado = (11 - (total % 11)).toString();

    if (dvCalculado === '10') {

      dvValido = 'k';
    } else if (dvCalculado === '11') {
      dvValido = '0';
    } else {
      dvValido = `${dvCalculado}`;
    }

    return dv === dvValido

  }


}
