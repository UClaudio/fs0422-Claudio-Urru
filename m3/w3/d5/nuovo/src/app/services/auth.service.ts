import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


type AuthResponse = {
  accessToken: string,
  user: {
    name?:string,
    email: string,
    id: number
  }
}

export interface ILogin {
  email: string,
  password: string
}

export interface IRegister {
  name: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl:string = 'http://localhost:5432'

  register(registerData:IRegister){
    return this.http.post<AuthResponse>(this.apiUrl+'/register', registerData)
  }

  login(loginData:ILogin){
    return this.http.post<AuthResponse>(this.apiUrl+'/login', loginData)
  }

  saveAccessData(data:AuthResponse){
    localStorage.setItem('access',JSON.stringify(data))
  }
  isUserLogged():boolean{
    return localStorage.getItem('access') != null
  }
  logOut(){
    localStorage.removeItem('access')
  }

}
