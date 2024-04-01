import { Component } from '@angular/core';
import { DataService } from '../data.service';
interface EmpolyeeDetials{
  id:number,
  name:string,
  age:number,
  phone:number;
}
@Component({
  selector: 'app-portfolio',
  template: `  <h3>Portfolio Data</h3>
  <div *ngFor="let employee of EmpolyeeDetials">
  <h6>Name : {{ employee.name}}<br>  Phone no : {{employee.phone}} <hr></h6><hr>
  </div>
  `,
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public EmpolyeeDetials: EmpolyeeDetials[]=[];
  constructor(private Service:DataService){
   
  }
  ngOnInit(){
   this.Service.getEmployeeData().subscribe(data=>{this.EmpolyeeDetials=data});
   
  }
}
