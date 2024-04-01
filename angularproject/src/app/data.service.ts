import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface employee {
  id: number;
  name: string;
  age: number;
  profesion: string;
  phone:number;
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  private url:string='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }
  getEmployeeData():Observable<employee[]>{
    return this.http.get<employee[]>(this.url)
  }
  getEmpolyee(){
    return[
      {
        id:1,
        name:'bhavesh',
        age : 21,
        profesion:'sales'
      },
      {
        id:2,
        name:'parag',
        age : 21,
        profesion:'HR'
      },
      {
        id:3,
        name:'Rahul',
        age : 22,
        profesion:'developer'
      },
    ]
    
  }

  

}
