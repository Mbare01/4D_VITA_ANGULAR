import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registrazione } from './registrazione.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca-oggetti';
  
  myForm : FormGroup;
  valori : Registrazione;
    songForm: any;
  
  constructor(fb : FormBuilder){
    this.myForm = fb.group({'user':['',Validators.required], 'pwd' : ['',Validators.required]})
  }
  
  onSubmit() {
    if(!this.myForm.invalid){
      this.valori = new Registrazione();
      this.valori.user = this.myForm['user'].value;
      this.valori.pwd = this.myForm['user'].value;
    }
  }
}
