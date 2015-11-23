<?php

class Schools extends CI_Controller {
    
    
    public function all () {
        
$data['all_schools'] = $this->Grafikon_model->get_all_schools();

$data['main_content'] = 'all';

$this->load->view('layouts/main', $data);

    }

    public function add() {

		if ($this->input->post()) {

			$this->form_validation->set_rules('naslov', 'Naslov', 'trim|required');
			$this->form_validation->set_rules('ocupation', 'Ocupation', 'trim|required');
			$this->form_validation->set_rules('link', 'Link', 'trim|required|min_length[2]|prep_url');
			$this->form_validation->set_rules('vreme', 'Vreme Trajanja', 'trim|required|min_length[2]');
			$this->form_validation->set_rules('novac', 'Cena', 'trim|required');

			if ($this->form_validation->run() == FALSE) {
                                $data['add']          = 'schools';
				$data['title']        = 'Dodajte Skolu';
				$data['info']         = $this->Grafikon_model->get_chart();
				$data['main_content'] = 'add';

				$this->load->view('layouts/second_main', $data);
			} else {
				$this->Grafikon_model->add_schools();
				$this->session->set_flashdata('submited', 'Uspesno ste dodali ustanovu!');

				redirect(base_url().'schools/add');

			}

		} else {
                        $data['add']= 'schools';
			$data['title']        = 'Dodajte Skolu';
			$data['info']         = $this->Grafikon_model->get_chart();
			$data['main_content'] = 'add';

			$this->load->view('layouts/second_main', $data);

		}

	}

}

?>