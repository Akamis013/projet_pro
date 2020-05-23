import { ReactiveFormsModule,Validators, FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


const corsHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  "Access-Control-Allow-Credentials": "true",



});

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
  mongourl : 'http://localhost:4000/api'




  constructor( private fb: FormBuilder, private router : Router , private http : HttpClient) { }

// Create
createEmployee(data): Observable<any> {
  let url = `${this.mongourl}/create`;
  return this.http.post(url, data)
}

  submit(){

    this.router.navigateByUrl('/validation');

  }

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

    this.http.post('http://localhost:4000/api/create',this.loginForm.value, ).subscribe(()=>{

    console.log('Enregistrement terminé ! ');
    })
    console.log(this.loginForm.value);
    var json_client = JSON.stringify(this.loginForm.value);
    this.router.navigateByUrl('/validation');
  }

}

//https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219

