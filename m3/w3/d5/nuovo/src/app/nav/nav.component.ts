import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  isCollapsed:boolean = true;

  checkLog():boolean{
    return this.auth.isUserLogged()
  }
  
  logOut(){
    this.auth.logOut();
  }
}
