import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-liste-appart',
  templateUrl: './liste-appart.component.html',
  styleUrls: ['./liste-appart.component.css']
})
export class ListeAppartComponent implements OnInit  {

  private url2 = "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr_crous_logement_france_entiere&q=&facet=zone&refine.zone=Paris+18";

  public appart: appartement;
  public id ;
  response: any;
  constructor(private http : HttpClient, private activatedRoute : ActivatedRoute) {

   }

  ngOnInit(){

    this.id = this.activatedRoute.snapshot.params['id'];
    let test = [];
    this.http.get(this.url2).subscribe(result => {



        //console.log(response.records[1]);
        //this.array_coordonnes = response.map( Objet => new coo )
        //console.log(this.array_coordonnes);

        //@ts-ignore
        for (let index = 0; index < result.records.length; index++) {
          //@ts-ignore
          //console.log(response.records.length);

          //console.log(response.records[index]);
          //@ts-ignore
          let appart_nom = result.records[index].fields.title;
          //console.log(appart_nom);
          //@ts-ignore
          let appart_adress = result.records[index].fields.address;
          //console.log(appart_adress);
          //@ts-ignore
          let appart_image = result.records[index].fields.photo;
          //@ts-ignore
          //console.log(result.records[index].fields.id);
          //this.appart.id = result.records[index].fields.id;
          //console.log(this.appart.id);
          this.appart = result['records']
          //console.log(this.appart);






        }



      },

      (error) => {
        console.log('Erreur ! : ' + error);
      }

    );




  }

  }



  interface appartement {
    id : number,
    nom : string,
    Adresse : string,
    Arrondissement : string ,
    photo : string ,
    telephone : string,
    Accés : string,
    fields : any,
    records : any,

  }
