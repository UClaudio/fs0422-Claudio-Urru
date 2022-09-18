import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup

  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }
  submit(){
    console.log(this.form.value)
    this.auth.register(this.form.value)
    .subscribe(res => {
      console.log(res);
      alert(`User ${res.user.name} registered successfully`)
      this.form.reset();
      this.router.navigate(['/login']);
    })
  }



}
