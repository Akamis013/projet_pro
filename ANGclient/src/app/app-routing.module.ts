import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {path:'Accueil', component:AccueilComponent},
  {path:'Formulaire', component:FormulaireComponent},
  {path: '', component:AccueilComponent},
  {path:'Profile', component: ProfileComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
