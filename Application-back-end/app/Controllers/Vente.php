<?php

namespace App\Controllers;

use App\Models\ProduitModel;
use CodeIgniter\RESTful\ResourceController;

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: OPTIONS, put, get, post, delete");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

class Vente extends ResourceController
{

    protected $modelName = 'App\Models\VenteModel';
    protected $format    = 'json';
    protected $produitModel;
	/**
	 * Return an array of resource objects, themselves in array format
	 *
	 * @return mixed
	 */
	public function index()
	{
        $this->produitModel = new ProduitModel();
        $produit = $this->produitModel->find(1);
        return $this->respond($produit);
	}



	/**
	 * Create a new resource object, from "posted" parameters
	 *
	 * @return mixed
	 */
	public function create()
	{
        $json = $this->request->getJSON();
        $this->produitModel = new ProduitModel();
        $prixFournitures = 10000;
        $produit = $json->idProduit;
        $quantite = $json->quantite;
        $produitActuel = $this->produitModel->find($produit);

        $this->produitModel = new ProduitModel();

        $nouveauNbrProd = $produitActuel['nbrProduitEnVente'] - $quantite;

        $prixTotal = ($produitActuel['prix'] * $quantite) + $prixFournitures;

        $dataToInsert = array(
            'idProduit' => $produit,
            'quantite' => $quantite,
            'prixTotal' =>$prixTotal,
        );

        $datatoUpdate = array(
          'nbrProduitEnVente' => $nouveauNbrProd
        );



        $this->model->insert($dataToInsert);

        $this->produitModel->update($produit, $datatoUpdate);

        $response = array(
            'status'   => 201,
            'messages' => array(
                'success' => 'Product created successfully'
            )
        );

        return $this->respondCreated($response);
	}


}
