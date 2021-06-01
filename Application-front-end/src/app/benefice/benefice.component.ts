import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficeService } from '../benefice.service';
import { Produit } from '../produit';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-benefice',
  templateUrl: './benefice.component.html',
  styleUrls: ['./benefice.component.css']
})
export class BeneficeComponent implements OnInit, OnDestroy {

  produits: Produit[] = [];
  public benefice : any;
  public beneficeTotal: number = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute,
              private beneficeSrvice: BeneficeService, 
              private location: Location,
              private router: Router) {
                this.dtOptions = {
                  pagingType: 'full_numbers'
                };
              }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.beneficeSrvice.getProduits().subscribe(produits =>
      {
        this.produits = produits
        this.dtTrigger.next();

        console.log(this.produits);
        console.log(this.produits);
      });
  }

  calculBenefice(param_1, param_2, param_3) {  
    this.benefice = (param_1 * param_2) -( param_3 * param_2);
    console.log("prix "+this.benefice);
    this.beneficeTotal = this.beneficeTotal + this.benefice;
    console.log("benefice total "+this.beneficeTotal);
    return this.benefice; 
 }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
