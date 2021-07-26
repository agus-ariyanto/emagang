<?php
/*
alias untuk auth hanya field email dan id saja
*/
class EmgAuthprofil extends Model{
    protected $alias='authprofil';
    protected $table='emgauth';
    protected $columns=array(
        'email'=>'VARCHAR(128)',
        'grup_id'=>'INT',
    );

}
