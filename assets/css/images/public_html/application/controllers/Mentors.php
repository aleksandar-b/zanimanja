<?php

class Mentors extends CI_Controller{
    
    
public function add() {

    
     
           if($this->input->post()){  
               
               
               
    $this->Grafikon_model->add_mentors();
    redirect( base_url());
           }else{
               
               $data['add'] = 'mentors';
               $data['title'] = 'Prijavite se za Mentora';
            $data['info'] = $this->Grafikon_model->get_chart();
               $data['main_content'] = 'mentor';

		$this->load->view('layouts/second_main', $data);
               
               
               
           }
    
           
           
           
           
           }    
    
    
    
    
}


