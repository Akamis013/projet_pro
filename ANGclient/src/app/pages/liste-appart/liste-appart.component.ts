import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-liste-appart',
  templateUrl: './liste-appart.component.html',
  styleUrls: ['./liste-appart.component.css']
})
export class ListeAppartComponent implements OnInit  {

  private url2 = "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr_crous_logement_france_entiere&q=&facet=zone&refine.zone=Paris+18";


  constructor(private http : HttpClient) {
   }

  ngOnInit() {
    let test = [];
    let appart: appartement = {nom : null, Adresse:null,Arrondissement : null ,
      photo : null ,
      telephone : null,
      Accés : null,
      records : null
    }
    this.http.get<coordonnées>(this.url2).subscribe(
      (response) =>{


        //console.log(response.records[1]);
        //this.array_coordonnes = response.map( Objet => new coo )
        //console.log(this.array_coordonnes);


        for (let index = 0; index < response.records.length; index++) {
          //@ts-ignore
          //console.log(response.records.length);
          test[index] = response.records[index].geometry.coordinates[index];
          //console.log(response.records[index]);
          //@ts-ignore
          let appart_nom = response.records[index].fields.title;
          //@ts-ignore
          let appart_adress = response.records[index].fields.address;
          //@ts-ignore
          let appart_image = response.records[index].fields.photo;
          appart.nom = appart_nom;
          appart.Adresse = appart_adress;
          appart.photo = appart_image;
          console.log(appart.nom);
          console.log(appart.Adresse);
          console.log(appart.photo);

          //console.log(response.records[index].geometry.coordinates);
          //console.log(response.records[index].geometry.coordinates);
          //console.log(response.records[index].geometry.coordinates[1]);


        }



      },

      (error) => {
        console.log('Erreur ! : ' + error);
      }

    );



  }
  }

  interface coordonnées{
    records: coordonnées[];
    geometry: coordonnées[];
    coordinates : coordonnées[];
  }

  interface appartement {

    nom : string,
    Adresse : string,
    Arrondissement : string ,
    photo : string ,
    telephone : string,
    Accés : string,
    records : appartement[]

  }
