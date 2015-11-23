<?php

/**
 *
 */
class Login extends CI_Controller {

	public function index() {

		$this->load->library('fbconnect');

		echo $this->fbconnect->send_back('ajax');

		$this->load->view('login');

	}

}
