<?php
namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\RequestInterface;

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: OPTIONS, PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

class Product extends ResourceController {
	//use ResponseTrait;
	
    protected $modelName = 'App\Models\ProduitModel';
    protected $format    = 'json';

	// fetch all products
    public function index() {
        return $this->respond($this->model->where("nbrProduitEnVente >", 0)->findAll());
    }


    public function create() {
        // get posted JSON
        //$json = json_decode(file_get_contents("php://input", true));
        $json = $this->request->getJSON();
        $id = $json->id;
        $produit = $this->model->where('id', $id)->first();

        $nbrProduitEnVente = $produit['nbrProduitEnVente'] + $json->nbrProduitEnVente;

            $data = array(
                'nbrProduitEnVente' => $nbrProduitEnVente
            );


        $this->model->update($id,$data);

        $response = array(
            'status'   => 200,
            'messages' => array(
                'success' => 'Product updated successfully'
            )
        );

        return $this->respond($response);
    }

    // fetch single product
    public function show($id = null) {
        $data = $this->model->where('id', $id)->first();

        if($data){
            return $this->respond($data);
        }else{
            return $this->failNotFound('No product found');
        }
    }

}