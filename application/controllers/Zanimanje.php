<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Zanimanje extends CI_Controller{
    
    function _remap($zanimanje){

        $this->index($zanimanje);

}

    public function index ($zanimanje){
        
        if (
		$data['info'] = $this->Grafikon_model->get_info($zanimanje)
                ){
		$data['main_content'] = 'zanimanje';

		$this->load->view('layouts/main', $data);
                }else{
                    
                    echo "Error";
                }
        
        
        
    }
    
}
