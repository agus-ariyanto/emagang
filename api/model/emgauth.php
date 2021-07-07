<?php
 // grup_id
 // 1 : admin saja
 // 2 : karyawan magang
class EmgAuth extends Model{
    protected $alias = 'auth';
    protected $columns=array(
        'email'=>'VARCHAR(128)',
        'pwd'=>'VARCHAR(128)',
        'grup_id'=>'INT DEFAULT 2',
        'token'=>'TEXT',
    );

    // default untuk deployment hanya satu akun
    //password admin = d033e22ae348aeb5660fc2140aec35850c4da997
    // password user = 12dea96fec20593566ab75692c9949596833adc9
	protected $firstdata=array(
		array(
            'id'=>'1',
			'email'=>'admin',
            'pwd'=>'d033e22ae348aeb5660fc2140aec35850c4da997',
            'grup_id'=>'1',
		),
	);


}
