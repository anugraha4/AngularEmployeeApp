import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
username=""
password=""

admin=()=>
{
  let ad:any={"username":this.username,"password":this.password}
  console.log(ad)
}
}
