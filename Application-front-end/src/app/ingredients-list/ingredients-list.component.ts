import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredients } from '../ingredients';
import { IngredientsService } from '../ingredients.service';
import { Repas } from '../repas';
import { Location } from '@angular/common';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css'],
})
export class IngredientsListComponent implements OnInit {
  
  public repas_selectionner: any;
  ingredient: Ingredients = new Ingredients();
  ingredients: Ingredients[] = [];
  @Input() repas: Repas = { nom: '', quantite: 0 , prix: 0};
  produit: Produit = new Produit();
  public idProduit: number;
  
  public quantite_necessaire: number = 0;
  public hamburger: Hamburger = {pain_burger: 1, tomate: 2, oeuf: 1, salade: 1, oignon: 1, mortadelle: 0.5};
  public frite: Frite = {pomme_de_terre: 0.2};
  public yaourt: Yaourt = {lait: 0.2,  sucre: 0.2,  yaourt_nature: 0.1};
  public ingredient_ready: boolean = false;
  public repas_interface: Repas_Interface = { repas1: 'Humberger', repas2: 'Frite', repas3: 'Yaourt'};
  public manquant;
  public manque: number = 0;
  public validation: boolean = true;

  constructor(private route: ActivatedRoute,
              private ingredientsService: IngredientsService,
              private produitService: ProduitService,
              private location: Location,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    console.log(history.state);
    this.idProduit = history.state['idProduit'];
    this.quantite_necessaire = history.state['quantiteProduit'];
    console.log(" identifient = "+this.idProduit);
    console.log("quantite = "+this.quantite_necessaire);

    this.getIngredients();
  }

  getIngredients(): void {
    console.log(this.idProduit);
    if (this.idProduit != null) {
      this.ingredientsService.getIngredient(this.idProduit).subscribe(ingredient => {
        this.ingredient = ingredient;
        console.log("donnée from data");
        console.log(this.ingredient);
        console.log(this.quantite_necessaire);
        this.ingredient_ready = true;
      });
     
    }
    else {
      this.router.navigateByUrl('/ingredient');
    } 
  } 

  getIngredient(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  verifier_quantite(param_1, param_2, param_3) {
     this.manquant = param_1 - (param_2 * param_3)
    if (this.manquant < 0 ) {
      this.validation = false;
    }
    return this.manquant < 0 ?   Math.abs(this.manquant) : ''; 
  }

  valueHasChanged() {
    this.ingredient_ready = false;
  }

  /** ajouter la quantité de produit fabriquer dans la table produit */
  save(): void {
    this.produit.id = this.idProduit;
    this.produit.nbrProduitEnVente = this.quantite_necessaire;
    console.log(this.produit);
    this.productService.addProduit(this.produit).subscribe( data => {
      this.router.navigateByUrl('/gestionPrix')
    });

  }

 }

export interface Hamburger {
  pain_burger: 1;
  tomate: 2;
  oeuf: 1;
  salade: 1;
  oignon: 1;
  mortadelle: 0.5;
}

export interface Frite {
  pomme_de_terre: 0.2
}

export interface Yaourt {
  lait: 0.2;
  sucre: 0.2;
  yaourt_nature: 0.1;
}

export interface Repas_Interface {
  repas1: 'Humberger';
  repas2: 'Frite';
  repas3: 'Yaourt';
}
