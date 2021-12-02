import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {NgxSpinnerService} from "ngx-spinner";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }


  findAllUsers() {

    return this.http.get<UserModel[]>('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user')
      .pipe(map((users) => {


        return users.map(user => ({
          ...user,
          fechaNacimiento: this.isValidDate(user.fechaNacimiento)
        }))
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


}
