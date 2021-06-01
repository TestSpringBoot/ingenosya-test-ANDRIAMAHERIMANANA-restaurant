/* création de la base de donnée */
CREATE DATABASE restaurant;

/* creation de la table produit */
CREATE TABLE `produit` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nomProduit` VARCHAR(50) NULL DEFAULT NULL,
	`nbrProduitEnVente` VARCHAR(50) NULL DEFAULT NULL,
	`prix` INT(6) NULL DEFAULT NULL,
	`depenseUnitaire` INT(11) NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
ROW_FORMAT=DYNAMIC
AUTO_INCREMENT=6
;

/* creation de la table ingredient */
CREATE TABLE `ingredient` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nomIngredient` VARCHAR(50) NOT NULL,
	`stockIngredient` DOUBLE NOT NULL DEFAULT 0,
	`idProduit` INT(11) NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `idProduit` (`idProduit`),
	CONSTRAINT `ingredient_ibfk_1` FOREIGN KEY (`idProduit`) REFERENCES `produit` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
ROW_FORMAT=DYNAMIC
AUTO_INCREMENT=11
;

/* creation de la table vente */
CREATE TABLE `vente` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`idProduit` INT(11) NULL DEFAULT NULL,
	`quantite` INT(11) NULL DEFAULT NULL,
	`prixTotal` INT(11) NULL DEFAULT NULL,
	PRIMARY KEY (`id`),
	INDEX `idProduit` (`idProduit`),
	CONSTRAINT `FK_vente_produit` FOREIGN KEY (`idProduit`) REFERENCES `produit` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=7
;

/* inserer des données dans la table produit dont les nombre près à ventre sont tous 0 */
insert into produit (id , nomProduit, nbrProduitEnVente, prix, depenseUnitaire) VALUES 
(1, 'Hamburger', 0, 5000, 3000),
(2, 'Frite', 0, 3000, 2000),
(3, 'Yaourt', 0, 1000, 700);


/* inserer les ingredients necessaires pour chaques repas */
INSERT INTO ingredient (id, nomIngredient, stockIngredient, idProduit) VALUES 
(1, 'pain burger', 1, 1),
(2, 'tomates', 2, 1),
(3, 'oeuf', 1, 1),
(4, 'salade', 1, 1),
(5, 'oignon', 1, 1),
(6, 'mortadelle', 0.5, 1),
(7, 'pommes de terre', 0.2, 2),
(8, 'lait', 0.2, 1),
(9, 'sucre', 0.1, 1),
(10, 'yaourt nature', 0.1, 1);
