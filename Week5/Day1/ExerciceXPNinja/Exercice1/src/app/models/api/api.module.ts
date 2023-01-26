// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Inject } from '@angular/core';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class User { 

  private name! : string;
  private username! : string ;
  private email! : string ;
  private phone! : number ;
  private website! : string ;


  constructor(
   name:string,
   username:string,
   email:string,
   phone:number,
   website:string){
    this.setName(name)
    this.setUserName(username)
    this.setEmail(email)
    this.setPhone(phone)
    this.setWebsite(website)
  }

  // setter function
  public setName(name:string) : void{ this.name = name }
  public setUserName(username:string) : void{ this.username = username }
  public setEmail(email:string) : void{ this.email = email }
  public setPhone(phone:number) : void{ this.phone = phone }
  public setWebsite(website:string) :void { this.website = website }

  //guetter function
  public getName() : string{ return this.name }
  public getUserName() : string{ return this.username }
  public getEmail() : string{ return this.email }
  public getPhne() : number{ return this.phone }
  public getWebsite() :string { return this.website }
}
