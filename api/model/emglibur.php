<?php
/*
table untuk daftar libur Nasional
*/
class EmgLibur extends Model{
    protected $alias='libur';
    protected $columns=array(
        'tanggal'=>'DATE',
        'title' =>'VARCHAR(64)',
    );
}
