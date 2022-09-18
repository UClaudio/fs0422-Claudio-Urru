import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  users: User[] = []

  constructor(private CRUDsvc: CRUDService) { }

  ngOnInit(): void {
    this.CRUDsvc.getAllUsers().subscribe(
      {
        next: res => {
          this.users = res;
          console.log(res)
        },
        error: error => console.log(error)
      }
    )
  }

}
