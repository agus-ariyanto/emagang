<?php

/*
kode_id 1 : wfh
        2 : wfo
        3 : lembur saat libur reguler (sabtu minggu)
        4 : lembur saat libur nasional
        5 : Ijin
        6 : Sakit
        7 : SPPD

lihat /model/emgkode.php

dow   : dayofweek

note :
!!! beda dengan format dow DateTime->format('w')
dengan result 0 : Minggu - 6 : Sabtu !!!!

dow pake format iso datetime->format('N')
result 1 : Senin - 7 : Minggu
*/
class EmgPresensi extends Model{
    protected $alias='presensi';
    protected $columns=array(
        'profil_id'=>'INT',
        'kode_id'=>'INT',
        'dow'=>'INT',
        'ts'=>'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
    );
    public $join='profil,kode';

}
