<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 30/05/2021
 * Time: 00:34
 */

namespace App\Controllers;


use CodeIgniter\RESTful\ResourceController;

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: OPTIONS, put, get, post, delete");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

class VenteController extends  ResourceController
{
    protected $modelName = 'App\Models\VenteModel';
    protected $format    = 'json';


    // save new product info
    public function create() {
        // get posted JSON
        //$json = json_decode(file_get_contents("php://input", true));
        $json = $this->request->getJSON();

        $produit = $json->idProduit;
        $quantite = $json->quantite;

        $data = array(
            'idProduit' => $produit,
            'quantite' => $quantite,
        );

        $this->model->insert($data);

        $response = array(
            'status'   => 201,
            'messages' => array(
                'success' => 'Product created successfully'
            )
        );

        return $this->respondCreated($response);
    }
}