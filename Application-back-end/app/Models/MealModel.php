<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 23/05/2021
 * Time: 13:45
 */

namespace App\Models;


use CodeIgniter\Model;

class MealModel  extends  Model {

    protected $table = 'repas';
    protected $primaryKey = 'id';

    protected $returnType = 'array';

    protected  $allowedFields = ['nom', 'prix'];

    protected  $validationRules = [];
    protected  $validationMessages = [];
    protected  $skipValidation = false;

}