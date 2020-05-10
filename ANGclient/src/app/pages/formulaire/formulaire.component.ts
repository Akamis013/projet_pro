import { ReactiveFormsModule,Validators, FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

@NgModule({
  imports: [

    ReactiveFormsModule
  ]
})
export class FormulaireComponent implements OnInit {


  loginForm: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({

      nom: [],
      prenom: [],
      email: [],
      telephone: [],
      departement: [],
      message: []


    })

  }

  login(){

    console.log("les données du formulaire sont "+this.loginForm.value);
    console.log(this.loginForm.value);
  }

}
