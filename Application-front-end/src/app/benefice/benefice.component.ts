import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficeService } from '../benefice.service';
import { Produit } from '../produit';
import { Location } from '@angular/common';

@Component({
  selector: 'app-benefice',
  templateUrl: './benefice.component.html',
  styleUrls: ['./benefice.component.css']
})
export class BeneficeComponent implements OnInit {

  produits: Produit[] = [];
  public benefice : any;
  public beneficeTotal: number = 0;

  constructor(private route: ActivatedRoute,
              private beneficeSrvice: BeneficeService, 
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.beneficeSrvice.getProduits().subscribe(produits => this.produits = produits);
    console.log(this.produits);
    console.log(this.produits);
  }

  calculBenefice(param_1, param_2, param_3) {  
    this.benefice = (param_1 * param_2) -( param_3 * param_2);
    console.log("prix "+this.benefice);
    this.beneficeTotal = this.beneficeTotal + this.benefice;
    console.log("benefice total "+this.beneficeTotal);
    return this.benefice; 
 }

}
