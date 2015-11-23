<?php
class Grafikon_model extends CI_Model {

	public function get_chart() {
		$this->db->select('*');
		$this->db->from('TABLE1');
		$query = $this->db->get();
		return $query->result();

	}
        
        
        public function get_all_schools(){
            
                $this->db->select('*');
		$this->db->from('schools');
		$query = $this->db->get();
		return $query->result();
            
            
            
        }
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

	public function get_ajax($name) {

		include_once ('assets/html_dom/simple_html_dom.php');

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

	}

	public function get_info($zanimanje) {
		$zanimanje = urldecode($zanimanje);
		$this->db->select('*');
		$this->db->from('TABLE1');
		$this->db->where('COL2', $zanimanje);
		$query = $this->db->get();
		return $query->row();
	}

	public function get_videos($zanimanje) {

		$this->db->select('*');
		$this->db->from('videos');
		$this->db->where('ocupation', $zanimanje);
		$query = $this->db->get();
		return $query->result();
	}

	public function get_schools($zanimanje) {
		$this->db->select('*');
		$this->db->from('schools');
		$this->db->where('ocupation', $zanimanje);
		$query = $this->db->get();
		return $query->result();
	}

	public function get_mentors($zanimanje) {
		$this->db->select('*');
		$this->db->from('mentors');
                $this->db->where('ocupation', $zanimanje);
		$query = $this->db->get();
		return $query->result();

	}
        
        public function add_schools(){
    
         
      $data = array(
   'user_id' => $this->input->post('user_id'),
   'naslov' => $this->input->post('naslov'),
   'link' =>  $this->input->post('link'),
  'vreme' => $this->input->post('vreme'),
   'novac' => $this->input->post('novac'),
    'ocupation' => $this->input->post('ocupation'),
    'opis' => $this->input->post('opis'));
        
                   
            
            
            $this->db->insert('schools', $data);
        }
     
     
     public function add_videos(){
    
         
      $data = array(
   'user_id' => $this->input->post('user_id'),
   'naslov' => $this->input->post('naslov'),
   'link' =>  $this->input->post('link'),
  'vreme' => $this->input->post('vreme'),
   'novac' => $this->input->post('novac'),
    'ocupation' => $this->input->post('ocupation'),
    'opis' => $this->input->post('opis'));
        
                   
            
            
            $this->db->insert('videos', $data);
        }
     
          public function add_mentors(){
    
         
      $data = array(
   'name' => $this->input->post('name'),
   'last_name' => $this->input->post('last_name'),
   'description' =>  $this->input->post('description'),
  'facebook' => $this->input->post('facebook'),
   'ocupation' => $this->input->post('ocupation'));
   
        
                   
            
            
            $this->db->insert('mentors', $data);
        }
        
        
        }

