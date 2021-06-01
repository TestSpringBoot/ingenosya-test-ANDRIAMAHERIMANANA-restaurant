import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Produit } from '../produit';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gestion-prix',
  templateUrl: './gestion-prix.component.html',
  styleUrls: ['./gestion-prix.component.css']
})
export class GestionPrixComponent implements OnInit {
  produits: Produit[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private productService: ProductService) {
      this.dtOptions = {
        pagingType: 'full_numbers'
      };
    }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(produits =>{
        this.produits = produits;
        this.dtTrigger.next();
      });
    console.log(this.produits);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
