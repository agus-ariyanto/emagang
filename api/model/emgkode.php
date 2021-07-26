<?php
class EmgKode extends Model{
    protected $alias='kode';

/*
absentia hanya untuk kode opsi tombol / kelompok tombol
absentia :  0 tidak tampil
            1 tampil di form presensi
            2 tampil di form absensi
*/
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
        'absentia'=>'INT DEFAULT 0',
    );

    protected $firstdata=array(
        array(
            'id'=>'1',
            'nama'=>'Work From Home',
            'absentia'=>1,
        ),
        array(
            'id'=>'2',
            'nama'=>'Work From Office',
            'absentia'=>1,
        ),
        array(
            'id'=>'3',
            'nama'=>'Lembur Libur Reguler ( Sabtu-Minggu )',
        ),
        array(
            'id'=>'4',
            'nama'=>'Lembur Libur Nasional',
        ),
        array(
            'id'=>'5',
            'nama'=>'Ijin',
            'absentia'=>2,
        ),
        array(
            'id'=>'6',
            'nama'=>'Sakit',
            'absentia'=>2,
        ),
        array(
            'id'=>'7',
            'nama'=>'SPPD',
            'absentia'=>2,
        ),

    );
}
