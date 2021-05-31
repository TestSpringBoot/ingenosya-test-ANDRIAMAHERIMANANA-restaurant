import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Produit } from '../produit';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-prix',
  templateUrl: './gestion-prix.component.html',
  styleUrls: ['./gestion-prix.component.css']
})
export class GestionPrixComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(produits => this.produits = produits);
    console.log(this.produits);
  }

}
