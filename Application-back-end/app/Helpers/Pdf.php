<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 31/05/2021
 * Time: 09:48
 */

if (! defined('BASEPATH')) exit('No direct script access allowed');

require_once  dirname(__FILE__) . '_/tcpdf.php_';

class Pdf extends  TCPDF
{
    function _construct() {
        parent:: _construct();
    }
}