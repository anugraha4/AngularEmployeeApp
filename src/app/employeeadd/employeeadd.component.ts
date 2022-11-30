import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  name=""
  designation=""
  salary=""
  phonenumber=""
  mailID=""

  readValues = ()=>
  {
    let data:any={
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "phonenumber":this.phonenumber,
      "mailID":this.mailID
    
    
    
    }
    console.log(data);
  }
}
