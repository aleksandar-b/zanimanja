

<div class="add">
 <?php echo validation_errors('<div class="alert alert-danger">', '</div>'); ?>
 <?php if ($this->session->flashdata('submited'))  : ?>
<div class="alert alert-success">
  <?php echo $this->session->flashdata('submited'); ?>

</div>
<?php endif; ?>
 <?php echo form_open(''.$add.'/add'); ?>
    <h2><?php echo $title ?></h2>
 <div class="form-group">


    <input type="hidden" name="user_id" class="form-control"  placeholder="Naslov Playliste " value="2">
</div>


<div class="form-group">

    <label for="name">Ime</label>
    <input type="text" name="name" class="form-control"  placeholder="Ime ">
</div>
      
<div class="form-group">
   
    <label for="Prezime">Prezime</label>
    <input type="text" name="last_name" class="form-control"  placeholder="Prezime ">
</div>

      <div class="form-group">

    <label >Izaberite oblast</label>
    <select name="ocupation" class="form-control">
        <?php foreach ($info as $info1): ?>
        <option value="<?php echo $info1->COL2  ?>"><?php echo $info1->COL2  ?></option>
<?php endforeach;?>
    </select>



</div>


  <div class="form-group">

    <label for="link">Vas Facebook profil</label>
   <input type="text" name="facebook" class="form-control"  placeholder="Unesite link ovde">
  </div>
   <div class="form-group">

    <label >Opis</label>
    <textarea type="text" name="description" class="form-control"  placeholder="Opis"></textarea>
</div>

  <button name="submit" type="submit" class="btn btn-primary">Dodaj</button>
</form>

</div>