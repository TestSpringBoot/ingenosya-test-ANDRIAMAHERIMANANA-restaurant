import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsDetailsComponent } from './ingredients-details/ingredients-details.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { GestionPrixComponent } from './gestion-prix/gestion-prix.component';
import { AddVenteComponent } from './add-vente/add-vente.component';
import { BeneficeComponent } from './benefice/benefice.component';
import { FormuleIngredientComponent } from './formule-ingredient/formule-ingredient.component';

const routes: Routes = [
	//{ path: '', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'ingredient', component: IngredientsDetailsComponent},
	{ path : 'listeIngredient', component: IngredientsListComponent},
	{ path: 'gestionPrix', component: GestionPrixComponent},
	{ path: 'addVente', component: AddVenteComponent},
	{path: 'benefice', component: BeneficeComponent},
	{ path: 'exportPdf', component: FormuleIngredientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
