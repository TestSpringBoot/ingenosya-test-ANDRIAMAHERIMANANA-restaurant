<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 23/05/2021
 * Time: 15:16
 */

namespace App\Models;


use CodeIgniter\Model;

class IngredientsModel extends  Model {

    protected  $table = 'ingredient';
    protected $primaryKey = 'id';

    protected $returnType = 'array';

    protected  $allowedFields = ['nomIngredient', 'stockIngredient','idProduit'];

    protected  $validationRules = [];
    protected  $validationMessages = [];
    protected  $skipValidation = false;

}