export class User {
    id:number | undefined;
    name:string;
    email:string;
    password:string;
  
    constructor(email:string, password:string, name:string){
      this.email = email;
      this.password = password;
      this.name = name
    }
  }
  