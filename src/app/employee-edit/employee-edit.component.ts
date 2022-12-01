import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
edit=""

edi=()=>
{
let ed:any={"edit":this.edit}
console.log(ed)
}
}
