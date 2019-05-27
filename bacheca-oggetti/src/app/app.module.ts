import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElencoComponent } from './elenco/elenco.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
