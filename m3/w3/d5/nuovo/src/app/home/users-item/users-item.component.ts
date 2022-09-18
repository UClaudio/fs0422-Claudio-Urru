import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  @Input() user!:User

  constructor(private CRUDsvc: CRUDService) { }

  ngOnInit(): void {
  }

  deleteUser(user:User):void {
    this.CRUDsvc.removeUser(user)
  }

}
