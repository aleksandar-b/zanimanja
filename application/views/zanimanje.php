
<?php if (isset($info)):?>

<div class='obrus1 '>
<div class="rgba">
  <h3 class="ocupation-header"><?php echo $info->COL2;?></h3>
    <div class="naslovnaikona"><img width="30" height="30" src="/chart/css/images/Home-icon.png"></div>

  <br>


<div class="opacityWrapper">
  <h2 class="ocupation-median">Broj pozitivnih odgovora u toku godine</h2>
  <h1 class="wage"><?php echo $info->COL3;?></h1>


  </div>



  <img class="imgchart1" src="<?php echo base_url();?>assets/images">
<img class="imgchart2" src="<?php echo base_url();?>assets/css/images/green.png">

  <div class="inner-footer">

    </div>

    </div>
</div>
<?php endif;?>

<?php $this->load->view('layouts/includes/sidebar');?>