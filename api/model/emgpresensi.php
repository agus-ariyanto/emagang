<?php

/*
status  0 : checkin
        1 : checkout

kode    0 : hari kerja
        1 : libur sabtu minggu
        2 : libur nasional
dow   : dayofweek
*/
class EmgPresensi extends Model{
    protected $alias='presensi';
    protected $columns=array(
        'profil_id'=>'INT',
        'ts'=>'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        'status'=>'INT DEFAULT 0',
        'kode'=>'INT DEFAULT 0',
        'dow'=>'INT',
    );

}
