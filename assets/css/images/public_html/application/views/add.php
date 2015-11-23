
<div class="add">
  <?php echo validation_errors('<div class="alert alert-danger">', '</div>'); ?>
<?php if ($this->session->flashdata('submited'))  : ?>
<div class="alert alert-success">
  <?php echo $this->session->flashdata('submited'); ?>

</div>
<?php endif; ?>
<?php echo form_open(''.$add.'/add'); ?>
<h2><?php echo $title;  ?></h2>

 <div class="form-group">


    <input type="hidden" name="user_id" class="form-control"  placeholder="Naslov Playliste " value="2">
</div>


<div class="form-group">
    
    <label for="naslov">Naziv/Naslov*</label>
    <input type="text" name="naslov" class="form-control"  placeholder=" ">
</div>


      <div class="form-group">

    <label >Zanimanje*</label>
    <select name="ocupation" class="form-control">
        <?php foreach ($info as $info1): ?>
        <option value="<?php echo $info1->COL2  ?>"><?php echo $info1->COL2  ?></option>
<?php endforeach;?>
    </select>



</div>


   

  <div class="form-group">

    <label for="link">Link*</label>
   <input type="text" name="link" class="form-control"  placeholder="Unesite Url link ">
  </div>
   <div class="form-group">

    <label >Opis</label>
    <textarea type="text" name="opis" class="form-control"  placeholder="Opis"></textarea>
</div>


  <div class="form-group">

    <label >Vreme trajanja*</label>
    <input type="text" name="vreme" class="form-control"  placeholder="Vreme potrebno za savladjivanje">
  </div>


<div class="form-group">

    <label >Cena*</label>
    <input type="text" name="novac" class="form-control"  placeholder="Cena">
</div>






<button name="submit" type="submit" id="b" class="btn btn-primary">Dodaj</button>
</form>

</div>

