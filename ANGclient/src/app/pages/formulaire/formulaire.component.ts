import { ReactiveFormsModule,Validators, FormBuilder,FormGroup,FormControl, NgForm} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import '../../../assets/smtp.js';



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


 Email;


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

  login(f : NgForm){

    this.http.post('http://localhost:4000/api/create',this.loginForm.value, ).subscribe(()=>{

    console.log('Enregistrement terminé ! ');
    })

    var json_client = JSON.stringify(this.loginForm.value);
    this.router.navigateByUrl('/validation');


    this.http.post('https://api.elasticemail.com/v2/email/send?apikey=B6D96F9A2CD2EFB3ED89B328032A92607BC3D409E3AB44A0738FF769E2BD3AAE38A4E6FDCA8B983DB8F7A93A0493EA07&subject=Validation de votre demande &from=alex-v-pg@hotmail.fr&fromName=&sender=&senderName=&msgFrom=&msgFromName=&replyTo=&replyToName=&to='+this.loginForm.value.email+'&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=Bonjour '+this.loginForm.value.prenom+' <br> Merci pour votre demande , vous serez prochainement mis en contact par l équipe <br><br> Cordialement <br> L équipe Coeur de Logement&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=0&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1&bodyAmp=&charsetBodyAmp=',this.loginForm.value, ).subscribe(()=>{

      })



  }

}

//https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219

