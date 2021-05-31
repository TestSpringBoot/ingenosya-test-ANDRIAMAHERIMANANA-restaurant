<?php
/**
 * Created by PhpStorm.
 * User: pa
 * Date: 31/05/2021
 * Time: 08:57
 */

class pdf_helper
{

    function tcpdf()
    {
        require_once('tcpdf/config/lang/eng.php');
        require_once('tcpdf/tcpdf.php');
    }

}