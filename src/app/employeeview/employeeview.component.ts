import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent {
data=[
  {
    "name":"anu",
    "designation":"Software",
    "salary":266,
    "phonenumber":65989900,
    "mailID":"smaple@gmal.com"
  
  
  },
  
    {
      "name":"Manu",
      "designation":"Software",
      "salary":25666,
      "phonenumber":6587900,
      "mailID":"aple@gmal.com"
    
    
    },
    {
      "name":"Tanu",
      "designation":"Software",
      "salary":25666,
      "phonenumber":6587900,
      "mailID":"sple@gmal.com"
    
    
    }
  

]
}
