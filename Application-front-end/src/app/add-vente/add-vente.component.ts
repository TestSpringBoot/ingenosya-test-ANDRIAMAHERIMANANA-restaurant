import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vente } from '../vente';
import { VenteService } from '../vente.service';
import { ProductService } from '../product.service';
import { Produit } from '../produit';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.css']
})
export class AddVenteComponent implements OnInit {

  @Input() vente: Vente = { idProduit: 0, quantite: 0};
  produits: Produit[] = [];
  public totalPrix: number = 0;
  public prixFourniture = 10000;
  public quantiteValide: boolean = false;
  public produit_trouve: Produit;

  constructor(private route: ActivatedRoute,
              private venteService: VenteService, 
              private location: Location,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  save(): void {
    console.log(this.vente); 
    if (this.vente.quantite > 0 && this.vente.idProduit > 0) {
      this.venteService.addVente(this.vente).subscribe();  
    }
    this.router.navigateByUrl('/ingredient'); 
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(produits => this.produits = produits);
    console.log(this.produits);
  }

  valueHasChanged() {
console.log("function called");
console.log(this.vente);
    this.produit_trouve = this.produits.find( value => {
      return value.id == this.vente.idProduit;
    });
    this.produit_trouve && this.vente && this.vente.quantite > this.produit_trouve.nbrProduitEnVente  ? this.quantiteValide = true : this.quantiteValide = false;
console.log(this.produit_trouve);
  }

}
