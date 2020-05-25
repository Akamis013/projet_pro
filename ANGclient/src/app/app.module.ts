
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './pages/profile/profile.component';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationFormulaireComponent } from './pages/validation-formulaire/validation-formulaire.component';
import { ListeAppartComponent } from './pages/liste-appart/liste-appart.component';
import { DetailappartComponent } from './pages/detailappart/detailappart.component';


let appRoutes: Routes= [
  {path:'Accueil', component:AccueilComponent},
  {path:'Formulaire', component:FormulaireComponent},
  {path: '', component:AccueilComponent},
  {path : 'validation', component : ValidationFormulaireComponent},
  {path : 'liste', component : ListeAppartComponent},
  {path : 'detail', component : DetailappartComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    AccueilComponent,
    ProfileComponent,
    OpenstreetmapComponent,
    ValidationFormulaireComponent,
    ListeAppartComponent,
    DetailappartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]


})



export class AppModule { }
