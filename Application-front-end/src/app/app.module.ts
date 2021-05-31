import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsDetailsComponent } from './ingredients-details/ingredients-details.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { GestionPrixComponent } from './gestion-prix/gestion-prix.component';
import { AddVenteComponent } from './add-vente/add-vente.component';
import { BeneficeComponent } from './benefice/benefice.component';
import { FormuleIngredientComponent } from './formule-ingredient/formule-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsDetailsComponent,
    IngredientsListComponent,
    GestionPrixComponent,
    AddVenteComponent,
    BeneficeComponent,
    FormuleIngredientComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  	FormsModule,
	  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
