<div class='obrus '>
    <div class="chart">

<?php foreach ($bar as $bar1):?>

<div class="hover1"   title="<?php echo $bar1->COL2;?>"><div class="de"><?php echo $bar1->COL2;
?></div><div class="ret"  style="width: <?php echo $bar1->COL3*34?>px;"> <?php echo $bar1->COL3;
?></div></div>

<?php endforeach;?>
<div class="izlog">
    <div class="popup animated fadeInLeft">Broj oznacava koliko bi kandidat koji ispunjava sve  uslove mogao da ocekuje pozitivnih odgovora za posao ako bi se prijavio na sve konkurse u toku godine.<div class="clear"></div><div class="next">Close</div><div class="krug"></div><div class="krug"></div><div class="krug1"></div></div>

<div class="izvor"><p>Izvor:Poslovi/Infostud(2013)</p></div>
        <div class="broj"><p>Programer(IT)</p>16.40<p>Pozitivnih odgovora</p></div></div>
<div class="activity-stream"><div><img src="<?php echo base_url();?>images/1434983557_supportfemale.png" alt=""><span>User Visna has posted playlist Web Developer</span><p> 12 min ago </p></div><div><img src="http://localhost/chart/css/images/1434983557_supportfemale.png" alt=""><span>User Visna has posted playlist Web Developer</span><p> 12 min ago </p></div><div><img src="http://localhost/chart/css/images/1434983557_supportfemale.png" alt=""><span>User Visna has posted playlist Web Developer</span><p> 12 min ago </p></div><div><img src="http://localhost/chart/css/images/1434983557_supportfemale.png" alt=""><span>User Visna has posted playlist Web Developer</span><p> 12 min ago </p></div></div>
</div>
   </div>


<?php $this->load->view('layouts/includes/sidebar');?>