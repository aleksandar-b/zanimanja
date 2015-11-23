<?php

class Chart extends CI_Controller {

	public function index() {

		$data['bar']          = $this->Grafikon_model->get_chart();
		$data['main_content'] = 'chart';

		$this->load->view('layouts/main', $data);
	}

}
?>