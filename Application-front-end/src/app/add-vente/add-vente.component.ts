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

}
