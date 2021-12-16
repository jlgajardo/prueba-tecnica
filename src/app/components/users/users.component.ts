import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users$!: Observable<UserModel[]>
  filteredUser: string = '';
  value: string = 'nombre';
  cantidad: string = 'si';

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {

    this.users$ = this.usersService.findAllUsers()
  }


}
