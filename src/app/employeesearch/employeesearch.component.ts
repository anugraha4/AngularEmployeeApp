import { Component } from '@angular/core';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent {
emcode=""

search=()=>
{
  let sea:any={"search":this.search}
  console.log(sea)
}
}
