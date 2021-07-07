## eMagang

### Aplikasi
- Backend PHP v7.2  /api
- FrontEnd Angularjs v1.4.9 /ui


### Install
- Download zip
- Etract dan Taruh di Xampp _htdocs_
- Buat Database dengan PHPMyadmin
- Edit _/api/core/config.php_
- Ubah db sesuai dengan databasenya
- Coba login dengan username _admin_, password _admin_

### Contoh _/api/core/config.php_

hanya ini yang diubah untuk dicoba, yang lainnya nanti

 ```
 $db=array(
     'host'=>'localhost', // hostname
     'user'=>'root', // username
     'pwd' =>'admin', // password
     'name'=>'emagang', // nama database
     'offset' =>'500', // limit record  yang ditampilkan
 );

 ```
