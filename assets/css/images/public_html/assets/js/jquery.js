
$('body').ready(function(){
$('#container').show();

});


$(document).ready(function() {
     //$('html').html('<div class="divload"><img class="load" src="ajax-loader.gif"></div>');
   $('.skocko').delay(1000).fadeIn('slow');
   $.each($('.ret'), function(index, value){

   $title = $( this ).attr('-data-base');

alert($title);

   });

        $("html").niceScroll({       
         scrollspeed: 120, 
        mousescrollstep:50,
        cursoropacitymin: 1,
        cursorwidth: "12px",
        cursorheight:"20px",
        cursorborder: "1px solid black",
        boxzoom: true
}); 
  
  
  
});

   $( ".hover1" ).on( "click", function() {
    $('.e').hide();
    $('.e').delay(100).fadeIn();
  
    $name=$(this).find("div").attr('title');
      
$('.data').prepend('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
      //$('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="ajax-loader.gif"></div></div>');
    $.get('example_extract_html.php', {name:$name}, function(data){

     $('.data').html('<div></div><ul class="pagination">' + data + '</ul>');
        
      
        
    });


    /*.done(function() {

$.each($('.hidden'), function( index, value) {

$college = $(this).html();
$.get('bingTuition.php', {college:$college}, function(data) {
$(this).html(data);
  alert(data);
});

    });
});*/
        $('.gam3, .gam4, .gam5, .gam6').removeClass('klik');
 
      $('.gam3').addClass('klik');
  
});

   
    
     $( ".hover1" ).on( "click", function() {
          name=$(this).find("div").attr('title');

    $.get('bing.php', {name: name}, function(data){
  
        $('.kocka33').hide().html('<h4><a target="_blank" href="'+ data +'">' + $name + '</a></h4>').fadeIn('fast');
        
        $('.h').hide().html('<h3><a target="_blank" href="'+ data +'">HOW TO BECOME ONE</a></h3>').fadeIn('fast');

    });

     });

     $('body').on('click','.pagination li a', function(e) {

      e.preventDefault();
         $ime = $( this ).attr('href');

 $('.data').prepend('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');

 $.get('api.php', {name: $ime}, function(data){
  
      



     $('.data').html('<div></div><ul class="pagination">' + data + '</ul>');
        

  

});

});




$('.pagination').on('click', function() {

  alert('kfkfkfk');
 
return false;

});

  $( ".gam3" ).on( "click", function() {
  
          $('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
    $.get('/chart/example_extract_html.php', {name: name}, function(data){

     $('.data').html('<div></div><ul class="pagination ">' + data + '</ul>');

   

        
        
        
    });
        
 $.get('bing.php', {name: name}, function(data){
  
        $('.kocka33').hide().html('<h4><a target="_blank" href="'+ data +'"></a></h4>').fadeIn('fast');
        
        $('.h').hide().html('<h3><a target="_blank" href="'+ data +'">HOW TO BECOME ONE</a></h3>').fadeIn('fast');

    });
    
  
});

$('.hover1').hover(function() {

$(this).find('.ret').addClass('hover2');

},
function() {
  $(this).find('.ret').removeClass('hover2');
 
}




);
/*
$('.hover1').click(function() {

$(this).find('.ret').addClass('active1');
},
function() {
  $(this).find('.ret').removeClass('active1');
}


);
*/


$(".hover1").mousedown(function(){
$(this).find('.ret').addClass('active1');
});

$(".hover1").mouseup(function(){
  $(this).find('.ret').removeClass('active1');
});


$( ".gam4" ).on( "click", function() {
  
          $('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
    $.get('/chart/virtualreality.php', {name: name}, function(data){

     $('.data').html( data );

});

  });

$( ".gam5" ).on( "click", function() {
  
          $('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
    $.get('/chart/onlinevideos.php', {name: name}, function(data){

     $('.data').html( data );

});

  });

$( ".gam6" ).on( "click", function() {
  
          $('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
    $.get('/chart/mentors.php', {name: name}, function(data){

     $('.data').html( data );

});

  });






$( ".gam7" ).on( "click", function() {
            $('.data').html('<div class="apsolute"><div class="divload"><img class="load" src="images/ajax.gif"></div></div>');
    $.get('torent.php', {name: name}, function(data){

     $('.data').html( data );

});

  });

$('.gam3, .gam4, .gam5, .gam6').click(function() {
$('.gam3, .gam4, .gam5, .gam6').removeClass('klik');
$(this).addClass('klik');
});

$('.kocka1').on('click', function(){

$('.e').fadeOut('fast');

});



$('body').on('mouseenter', '.display ', function() {
$(this).find('.time, .tution').css('color', 'white');
$(this).find('.time, .tution').css('background', '#004066');


});

$('body').on('mouseleave', '.display ', function() {

$(this).find('.time, .tution').css('color', 'rgba(60%,80%,100%,1)');
$(this).find('.time, .tution').css('background', 'transparent');



});