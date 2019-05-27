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
  myForm: FormGroup;
  input : Registrazione; 
  vettUtenti :Registrazione[]; 
   
  constructor(fb: FormBuilder){
    this.vettUtenti = new Array();
    this.myForm = fb.group({
      'nome' : ['',Validators.required],
      'cognome' : ['',Validators.required],
      'user' : ['', Validators.required],
      'pwd' : ['',Validators.required],
     
    });
    
  } 
  onSubmit(){
    if(!this.myForm.invalid) 
    {
      
      this.input = new Registrazione(); 
      
      this.input.nome =  this.myForm.controls['nome'].value
      this.input.cognome =  this.myForm.controls['cognome'].value
      this.input.user =  this.myForm.controls['user'].value
      this.input.pwd =  this.myForm.controls['pwd'].value
      
      this.vettUtenti.push(this.input);  
      
    }
  }
}