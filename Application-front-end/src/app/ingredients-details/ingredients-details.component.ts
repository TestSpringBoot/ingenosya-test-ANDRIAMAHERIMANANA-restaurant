import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredients } from '../ingredients';
import { IngredientsService } from '../ingredients.service';
import { Location } from '@angular/common';
import { Repas } from '../repas';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.css']
})
export class IngredientsDetailsComponent implements OnInit {


  @Input() repas: Repas = { nom: '', quantite: 0 , prix: 0};
  public repas_selectionner: any;
  public quantite_necessaire: number;
  public ingredient_ready = false;  
  public repas_interface: Repas_Interface = { repas1: 'Humberger', repas2: 'Frite', repas3: 'Yaourt'}

  constructor(private route: ActivatedRoute,
              private ingredientsService: IngredientsService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getRepas();
  }

  getRepas(): void {
    console.log(this.repas_selectionner);
    if (this.repas_selectionner != null) {  
        this.router.navigateByUrl('/listeIngredient', { state:{ idProduit: this.repas_selectionner,  quantiteProduit: this.quantite_necessaire} });
    }
    else {
      this.router.navigateByUrl('/ingredient');
    }     
  } 

  valueHasChanged() {
    this.ingredient_ready = false;
  }

  
}

export interface Repas_Interface {
  repas1: 'Humberger';
  repas2: 'Frite';
  repas3: 'Yaourt';
}
