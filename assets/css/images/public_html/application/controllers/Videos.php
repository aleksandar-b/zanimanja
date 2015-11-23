<?php

class Videos extends CI_Controller {

	public function add() {

		if ($this->input->post()) {

			$this->form_validation->set_rules('naslov', 'Naslov', 'trim|required');
			$this->form_validation->set_rules('ocupation', 'Ocupation', 'trim|required');
			$this->form_validation->set_rules('link', 'Link', 'trim|required|min_length[2]|prep_url');
			$this->form_validation->set_rules('vreme', 'Vreme Trajanja', 'trim|required|min_length[2]');
			$this->form_validation->set_rules('novac', 'Cena', 'trim|required');

			if ($this->form_validation->run() == FALSE) {
				$data['add']          = 'videos';
				$data['title']        = 'Dodajte Video Tutorijal';
				$data['info']         = $this->Grafikon_model->get_chart();
				$data['main_content'] = 'add';

				$this->load->view('layouts/second_main', $data);
			} else {
				$this->Grafikon_model->add_videos();
				$this->session->set_flashdata('submited', 'Uspesno ste dodali video tutorijal!');

				redirect(base_url().'videos/add');

			}

		} else {
			$data['add']          = 'videos';
			$data['title']        = 'Dodajte Video Tutorijal';
			$data['info']         = $this->Grafikon_model->get_chart();
			$data['main_content'] = 'add';

			$this->load->view('layouts/second_main', $data);

		}

	}
}