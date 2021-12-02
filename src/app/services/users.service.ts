import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }


  findAllUsers() {

    return this.http.get<UserModel[]>('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user')
  }
}
