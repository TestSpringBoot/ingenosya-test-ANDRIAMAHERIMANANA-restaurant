import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-formule-ingredient',
  templateUrl: './formule-ingredient.component.html',
  styleUrls: ['./formule-ingredient.component.css']
})
export class FormuleIngredientComponent implements OnInit {

  produits: Produit[] = [];

  public hamburger: Hamburger = 
  {
    pain_burger: "1 pain burger",
    tomate: "2 tomates",
    oeuf: "1 oeuf",
    salade: "1 salades",
    oignon: "1 oignon",
    mortadelle:" 0.5 g de mortadelle"
  };

  public frite: Frite = { 
    pomme_de_terre: "0.2 kg de pommes de terre"
  };

  public yaourt: Yaourt = {
    lait:" 0.2 litre de lait",
    sucre: "0.2 g de sucre",
    yaourt_nature: "0.1 litre d'yaourt nature"
  };

  public repas: Repas_Interface = { 
    repas1: 'Humberger', 
    repas2: 'Frite', 
    repas3: 'Yaourt'
  };
  
  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private produitService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.produitService.getProducts().subscribe(produits => this.produits = produits);
    console.log(this.produits);
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
  }

}

export interface Hamburger {
  pain_burger: "1 pain burger";
  tomate: "2 tomates";
  oeuf: "1 oeuf";
  salade: "1 salades";
  oignon: "1 oignon";
  mortadelle:" 0.5 g de mortadelle";
}

export interface Frite {
  pomme_de_terre: "0.2 kg de pommes de terre"
}

export interface Yaourt {
  lait:" 0.2 litre de lait";
  sucre: "0.2 g de sucre";
  yaourt_nature: "0.1 litre d'yaourt nature";
}

export interface Repas_Interface {
  repas1: 'Humberger';
  repas2: 'Frite';
  repas3: 'Yaourt';
}