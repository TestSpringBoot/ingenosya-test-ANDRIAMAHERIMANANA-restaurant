<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 29/05/2021
 * Time: 23:59
 */

namespace App\Models;


use CodeIgniter\Model;

class ProduitModel extends Model
{
    protected $table = 'produit';
    protected $primaryKey = 'id';

    protected $returnType = 'array';

    protected  $allowedFields = ['nom', 'nbrProduitEnVente','depenseUnitaire'];

    protected  $validationRules = [];
    protected  $validationMessages = [];
    protected  $skipValidation = false;
}