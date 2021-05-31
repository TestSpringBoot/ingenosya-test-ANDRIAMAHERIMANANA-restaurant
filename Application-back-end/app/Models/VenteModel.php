<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 30/05/2021
 * Time: 00:35
 */

namespace App\Models;


use CodeIgniter\Model;

class VenteModel extends  Model
{
    protected $table = 'vente';
    protected $primaryKey = 'id';

    protected $returnType = 'array';

    protected  $allowedFields = ['idProduit', 'quantite', 'prixTotal'];

    protected  $validationRules = [];
    protected  $validationMessages = [];
    protected  $skipValidation = false;
}