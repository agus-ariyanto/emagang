<?php
/*  konfigurasi untuk koneksi dbase
 * offset untuk limit record yang ditampilkan
 */

 $db=array(
     'host'=>'127.0.0.1',
     'user'=>'root',
     'pwd' =>'admin',
     'name'=>'emagang',
     'offset' =>'500'
 );

$prefix='emg';

$noauth=array('image','login','token');
$jwt=array(
    'alg'=>'HS256',
    'key'=>'emagang',
);

/* dev_mode -> develop mode
 * beri nilai selain satu untuk production
 */
define('DEV_MODE',1);
