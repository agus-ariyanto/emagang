<?php
class EmgOffice extends Model{
    protected $alias='office';
    protected $columns=array(
        'sbu_id'=>'INT',
        'nama'=>'VARCHAR(128)',
    );

    public $join='sbu';
    protected $firstdata=array(
        array('id'=>1,'nama'=>'ICON+ CAWANG' ,'sbu_id'=>1),
        array('id'=>2,'nama'=>'ICON+ MAMPANG' ,'sbu_id'=>1),
        array('id'=>3,'nama'=>'ICON+ GANDUL' ,'sbu_id'=>1),
        array('id'=>4,'nama'=>'ICON+ JAMSOSTEK' ,'sbu_id'=>1),
        array('id'=>5,'nama'=>'ICON+ SEMARANG' ,'sbu_id'=>3),
        array('id'=>6,'nama'=>'ICON+ SOLO' ,'sbu_id'=>3),
        array('id'=>7,'nama'=>'ICON+ PURWOKERTO' ,'sbu_id'=>3),
        array('id'=>8,'nama'=>'ICON+ TEGAL' ,'sbu_id'=>3),
        array('id'=>9,'nama'=>'ICON+ SALATIGA' ,'sbu_id'=>3),
        array('id'=>10,'nama'=>'ICON+ BANDUNG' ,'sbu_id'=>2),
        array('id'=>11,'nama'=>'ICON+ SERANG' ,'sbu_id'=>2),
        array('id'=>12,'nama'=>'ICON+ TASIKMALAYA' ,'sbu_id'=>2),
        array('id'=>13,'nama'=>'ICON+ MADIUN' ,'sbu_id'=>4),
        array('id'=>14,'nama'=>'ICON+ MALANG' ,'sbu_id'=>4),
        array('id'=>15,'nama'=>'ICON+ SURABAYA 1','sbu_id'=>4),
        array('id'=>16,'nama'=>'ICON+ SURABAYA 2','sbu_id'=>4),
        array('id'=>17,'nama'=>'ICON+ BANYUWANGI' ,'sbu_id'=>4),
        array('id'=>18,'nama'=>'ICON+ PACITAN' ,'sbu_id'=>4),
    );

}
