<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Ajax extends CI_Controller {

	public function index() {

		$name = urlencode($this->input->get('name'));

		echo 'Hello'.$name;

	}

	public function name() {

		function clean_all(&$items, $leave = '') {
			foreach ($items as $id => $item) {
				if ($leave && ((!is_array($leave) && $id == $leave) || (is_array($leave) && in_array($id, $leave)))) {continue;
				}

				if ($id != 'GLOBALS') {
					if (is_object($item) && ((get_class($item) == 'simple_html_dom') || (get_class($item) == 'simple_html_dom_node'))) {
						$items[$id]->clear();
						unset($items[$id]);
					} else if (is_array($item)) {
						$first = array_shift($item);
						if (is_object($first) && ((get_class($first) == 'simple_html_dom') || (get_class($first) == 'simple_html_dom_node'))) {
							unset($items[$id]);
						}
						unset($first);
					}
				}
			}
		}
		$name = urlencode($this->input->get('name'));

		$html = file_get_html('http://www.careeronestop.org/toolkit/training/find-local-training.aspx?keyword='.$name.'&location=NEW%20YORK&radius=50&ajax=occ&post=y');

		$i = 0;
		foreach ($html->find('.first a') as $e) {
			if ($i > 0) {
				echo '<div class="display"><div class="time">2y</div><div class="tution">1200e<div class="hidden">'.$e->plaintext.'</div></div><div class="red"><a target="_blank" href="'.$e->href.'">'.$e->plaintext.'</a></div></div></br>';

				$encode = urlencode($e->plaintext);

			}
			$i++;
		}

		foreach ($html->find('.pagination') as $value) {
			foreach ($value->find('span') as $e) {
				$e->outertext = '';

			}

			echo '<ul class="pagination">'.$value->innertext.'</ul>';

		}

		$html->clear();
		unset($html);

	}

	public function videos() {

		$zanimanje = $this->input->get('name');

		if ($data['info'] = $this->Grafikon_model->get_videos($zanimanje)) {
			echo ';<div class="display"><div class="time"></div><div class="tution"><div class="hidden"></div></div><div class="redheader"><a href="'.base_url().'users/videos/">VIDEOS</a></div></div></br>';

			foreach ($data['info'] as $info1) {

				echo ';<div class="display animated fadeInRight"><div class="time">'.$info1->vreme.'</div><div class="tution">'.$info1->novac.'<div class="hidden">'.$info1->opis.'</div></div><div class="red"><i class="fa fa-caret-right"></i><a target="_blank" href="'.$info1->link.'">'.$info1->naslov.'</a></div></div></br>';

			}
		} else {

			echo '<div class="center"><h4><strong><a href="'.base_url().'videos/all/">VIDEOS</a></strong></h4></div><div class="center"><img width="270px" height="200px" src="'.base_url().'assets/images/544-youtube-play-button-icon.png"></div><div class="obavestenje"><h4>Trenutno prazno za: <strong>'.$zanimanje.'</strong></h4></div>';
			echo '<div class="buttonw"><button  type="button" class="btn "><a href="'.base_url().'videos/add" >Postavi video</a></button></div><div class="facebook">Facebook grupa <a href="#">'.$zanimanje.'-Tutorijali </a></div>';

		}

	}
	public function mentors() {

		$zanimanje = $this->input->get('name');

		if ($data['info'] = $this->Grafikon_model->get_mentors($zanimanje)) {
			echo '<div class="display"><div class="time"></div><div class="tution"><div class="hidden"></div></div><div class="redheader"><a href="'.base_url().'mentors/all/">MENTORS</a></div></div></br>';

			foreach ($data['info'] as $info1) {

				echo '<div class="display"><div class="time"></div><div class="tution"><div class="hidden"></div></div><div class="red"><a target="_blank" href="mentors/single/'.$info1->id.'">'.$info1->name.''.$info1->last_name.'</a></div></div></br>';

			}

		} else {
			echo '<div class="center"><h4><strong><a href="'.base_url().'mentors/all">MENTORI</a></strong></h4></div><div class="center"><img width="270px" height="200px" src="'.base_url().'assets/images/544-youtube-play-button-icon.png"></div><div class="obavestenje"><h4>Trenutno prazno za: <strong>'.$zanimanje.'</strong></h4></div>';
			echo '<div class="buttonw"><button  type="button" class="btn "><a href="'.base_url().'mentors/add" >Postani mentor </a></button></div><div class="facebook">Facebook grupa <a href="#">'.$zanimanje.'-Tutorijali </a></div>';

		}

	}

	public function schools() {

		$zanimanje = $this->input->get('name');

		if ($data['info'] = $this->Grafikon_model->get_schools($zanimanje)) {
			echo ';<div class="display"><div class="time"></div><div class="tution"><div class="hidden"></div></div><div class="redheader"><a href="'.base_url().'schools/all/">Obrazovne ustanove/Kursevi</a></div></div></br>';

			foreach ($data['info'] as $info1) {

				echo ';<div class="display animated fadeInRight"><div class="time">'.$info1->vreme.'</div><div class="tution">'.$info1->novac.'<div class="hidden">'.$info1->opis.'</div></div><div class="red"><a target="_blank" href="'.$info1->link.'">'.$info1->naslov.'</a></div></div></br>';

			}
		} else {
			echo '<div class="center"><h4><strong> <a href="'.base_url().'schools/all">OBRAZOVNE USTANOVE/KURSEVI</a></strong></h4></div><div class="center"><img width="270px" height="200px" src="'.base_url().'assets/images/544-youtube-play-button-icon.png"></div><div class="obavestenje"><h4>Trenutno prazno za: <strong>'.$zanimanje.'</strong></h4></div>';
			echo '<div class="buttonw"><button  type="button" class="btn"><a href="'.base_url().'schools/add" >Dodaj ustanovu</a> </button></div><div class="facebook">Facebook grupa <a href="#">'.$zanimanje.'-Tutorijali </a></div>';

		}
	}

}