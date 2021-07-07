<?php
/*
restrict access langsung ke tabel auth
lihat /model/emgauth.php
*/
class Auth extends Base{
    function index(){
        $this->status(404);
        $this->data(0);
    }

}
