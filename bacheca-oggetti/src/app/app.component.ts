import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
}
