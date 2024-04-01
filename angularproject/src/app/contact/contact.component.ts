import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private fb: FormBuilder){}
  registrationForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    message : ['',Validators.required],
  })
  myDetails= this.fb.group({
    city: ['', Validators.required],
    State: ['', Validators.required],
    comment: ['', Validators.required]
  })
  

}
