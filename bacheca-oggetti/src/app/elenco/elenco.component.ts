import { Component, OnInit, Input } from '@angular/core';
import { Registrazione } from '../registrazione.model';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
@Input() utenti: Registrazione[];
  constructor() { }

  ngOnInit() {
  }

}
