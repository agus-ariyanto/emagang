<?php
class Profil extends Ctrl{
    function __construct(){
        parent::__construct();
        $this->model='profil';
        $this->model_id=$this->query[0];
    }

    protected function saveAccount(){
        $this->addModel('auth');
        if(!empty($this->Params->key('password')))
              $this->Params->set('pwd',sha1($this->Params->key('password')));
        $auth_id=$this->auth->savePost($this->Params->all());
        $this->Params->set('authprofil_id',$auth_id);
        return $auth_id;
    }

    //simpan record dua tabel, auth dan profil
    function submit(){
        $this->saveAccount();
        parent::save();
    }

    // hanya untuk ganti password ;
    function account(){
        $this->model_id=$this->saveAccount();
        $this->model='authprofil';
        parent::id();
    }

    // hanya remove akun login saja
    function delete(){
        // hanya delete akun login
        $this->model='auth';
        $this->model_id=$this->Params->key('authprofil_id');
        parent::delete();
        // update profil dengan auth_id=-auth_id;
        $this->addModel('profil');
        $this->Params->set('authprofil_id',$this->model_id*-1);
        $id=$this->profil->savePost($this->Params->all());
        $this->model='profil';
        $this->model_id=$id;
        parent::id();
    }
}
