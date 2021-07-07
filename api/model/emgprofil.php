<?php
class EmgProfil extends Model{
    protected $alias='profil';
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
        'authprofil_id'=>'INT',
        'phone'=>'VARCHAR(24)',
        'alamat'=>'VARCHAR(128)',
        'divisi_id'=>'INT',
        'office_id'=>'INT',
    );

    public $join='authprofil,divisi,office';
}
