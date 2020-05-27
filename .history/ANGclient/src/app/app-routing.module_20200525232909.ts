import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OpenstreetmapComponent } from './openstreetmap/openstreetmap.component';
import { ListeAppartComponent } from './pages/liste-appart/liste-appart.component';
import { DetailappartComponent } from './pages/detailappart/detailappart.component';

const routes: Routes = [

  {path:'Accueil', component:AccueilComponent},
  {path:'Formulaire', component:FormulaireComponent},
  {path: '', component:AccueilComponent},
  {path:'Profile', component: ProfileComponent},
  {path:'Map', component: OpenstreetmapComponent},
  {path:'liste', component: ListeAppartComponent},
  {path: 'liste/:id/details', component: ListeAppartComponent, pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
