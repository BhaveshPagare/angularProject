import { Component } from '@angular/core';
import { DataService} from '../data.service';

interface EmpolyeeDetials{
  id:number,
  name:string,
  age:number
}
@Component({
  selector: 'app-services',
  template: `
  <div class='container'>
  <h1>Empolyee List</h1>
    <div *ngFor="let employee of EmpolyeeDetials">
          <h4>{{ employee | json}} </h4>
    </div>
    </div>
  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  public EmpolyeeDetials: EmpolyeeDetials[]=[];
     constructor(private Service:DataService){
      
     }
     ngOnInit(){
      this.EmpolyeeDetials=this.Service.getEmpolyee()
     }
}
