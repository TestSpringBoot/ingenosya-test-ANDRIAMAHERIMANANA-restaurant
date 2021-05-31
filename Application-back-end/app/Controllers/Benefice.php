<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: OPTIONS,POST,GET,PUT,DELETE');

class Benefice extends ResourceController
{

    protected $modelName = 'App\Models\ProduitModel';
    protected $format = 'json';

	/**
	 * Return an array of resource objects, themselves in array format
	 *
	 * @return mixed
	 */
	public function index()
	{
        return $this->respond($this->model->where('nbrProduitEnVente >', 0)->findAll());
	}

}
