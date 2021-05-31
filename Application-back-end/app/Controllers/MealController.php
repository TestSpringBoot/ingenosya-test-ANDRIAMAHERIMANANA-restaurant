<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 23/05/2021
 * Time: 13:44
 */

namespace App\Controllers;


use App\Models\IngredientsModel;
use CodeIgniter\RESTful\ResourceController;

header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type,  Accept");
header('Access-Control-Allow-Methods: OPTIONS,POST,GET,PUT,DELETE');

class MealController extends  ResourceController
{

    protected $modelName = 'App\Models\MealModel';
    protected $format = 'json';
    protected $ingredientsModel;
    protected $a;
    protected $b;


    public function index() {
        $this->ingredientsModel = new IngredientsModel();
        $data1 = $this->ingredientsModel->find(1);
       // $a = $this->ingredientsModel->get($this->get('id'));
        $json = $this->request->getJSON();

        $d = $data1['nameIngredient'];
        //dd($d);
        $data = array(
            'ingredient1' => $d
        );
       // return $this->respond($data);
        return $this->respond($this->model->findAll());
    }


    public function show($id = null) {

              $this->ingredientsModel = new IngredientsModel();
              //$data = $this->model->where('id', $id)->first();
              $ingredient = $this->ingredientsModel->where('idProduit', $id)->findAll();
             // dd($ingredient);

        if($ingredient){
            return $this->respond($ingredient);
        }else{
            return $this->failNotFound('No meal found');
        }
        }

}