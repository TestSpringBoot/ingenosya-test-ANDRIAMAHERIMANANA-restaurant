Premièrement, il faut lancer la requête conception.sql situé dans Apllication-front-end/
Dans cette requête, il crée une table restaurant et insert des données dans la table produit
et ingredient dont le champ nbrProduitEnVente du produit est 0 au démarrage .

Pour back-end
	- Il faut ouvrir le terminale en pointant sur le dossier nommé Application-back-end: 
	- Ensuite run "php spark serve" pour demarer l'application.

Pour la partie Front-end
	- Il faut ouvrir le terminale en pointant sur le dossier nommé Application-Front-end: 
	- run "npm install " pour charger node_modules
	- run " ng serve " pour demarer l'apllication.
	- Il faut entrer dans l'url " http://localhost:4200 " 

Pour bien savoir que il n'y a pas de menue disponible au demarrage de l'application:
	- veuiller entrer dans le menue "Gestion de prix" et voyez bien qu"il n'y a pas de 
	  menue disponible.
	
Donc il faut entrer dans le menue repas pour fabriquer un ou des menue(s).
	NB: les ingredients en stock pour le test ne peut fabriquer qu'une seule produit pour l'Hamburger 
	    et le pomme de terre.
	    Ainsi dans la fabrication d'yaourt, la capacité de sucre est insuffisant pour bien tester 
	    qu'on ne peut pas valider s'il en manque au moins un ingredient

	- dans la page repas, veuillez choisir entre hamburger, frite ou yaourt.
	- Donc si la quantité à introduire est donc supérieur à 1, le bouton valider fabriquation dans 
	  la liste des ingredients necessaires est désactiver, alors vous pouvez tester avec la valeur 
	  1 ou supérieur à 1 pour tester le fonctionnement du bouton.

	- Si la quantité est 1, on peut valider le bouton " valider fabrication " et celui-ci augmente le 
	  nombre de produit près en vente ( champ nbrProduitEnVente du table produit) à 1. Ansi vous pouvez
	  la vérifier dans le menue "Gestion de prix" qu'il y en a un produit près à vendre.

	- pour ajouter une vente de produit, cliquer sur le bouton "ajouter vente de produit" dans le menue "gestion de prix"
	  et on arrive dans une nouvelle page pour choisir le produit à vendre et  saisir le nombre vendue. Après avoir cliquer 
          sur le bouton vendre, une notification s'affiche pour la confirmation de la vente en affichant le nombre de produit.
	  Si oui, le systeme fait un ajout dans la table vente et le nombre prêt en vente dimunue , sinon on reste sur la même page.

	- Dans la table bénefice, on y trouve le produit ainsi que le benefice obtenue pour le nombre de produit mettre en vente
		règle de gestion : benefice = ( nombre de produit en vente * prix) - ( nombre de produit en vente * depense).

	- Enfin dans le menue "Menue et formule repas" on trouve le formule de repas et le ou les menue(s) disponibles. 
          Pour générer en pdf, il faut cliquer sur le bouton "download pdf".

      

	


	

	