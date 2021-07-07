<?php
class EmgSbu extends Model{
    protected $alias='sbu';
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
    );

    protected $firstdata=array(
        array('id'=>1,'nama'=>' SBU PUSAT'),
        array('id'=>2,'nama'=>'SBU BANTEN-JABAR'),
        array('id'=>3,'nama'=>'SBU JATENG'),
        array('id'=>4,'nama'=>'SBU JATIM'),
    );
}
