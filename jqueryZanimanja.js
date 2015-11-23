

$(document).ready(function () {
    
      $('.popup').delay(1100).show(0);
        
    base_url = 'http://zanimanja.tk//*
      Description:
      The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects.
    
      Syntax:
      [element0, element1, ..., elementN]
      new Array(element0, element1[, ...[, elementN]])
      new Array(arrayLength)
    *//*
      Description:
      The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects.
    
      Syntax:
      [element0, element1, ..., elementN]
      new Array(element0, element1[, ...[, elementN]])
      new Array(arrayLength)
    */';
$('.gam3').tooltip();
    $('.gam5').tooltip();
    $('.gam6').tooltip();

    $('.e').scrollToFixed();
    name1 = $('.ocupation-header').text();
    
    if(!name1) {
    name1 = 'Programer(IT)';
    }
    $('.btn1 a').attr('href',''+ base_url +'schools/add');
    $.get(' ' + base_url +'Ajax/schools', {name: name1}, function (data) {
     $('.data').html('<div></div>' + data);
    });
  
$('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');
        $('.gam3').addClass('klik');
   a = 0;


   $(".hover1").on("click", function () {
     
        name = $(this).attr('title');
      $broj = $(this).find('.ret').html();
       $('.broj').html('<p>' + name +'</p>' + $broj  + '<p>Pozitivnih odgovora </p>');
        $('.kocka33').html('<h4><a href="' + base_url + 'zanimanje/' + name + '">' + name + '</a></h4>');
        $('.btn1 a').attr('href',''+ base_url +'schools/add');
        $('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');
        $('.gam3').addClass('klik');
    $.get('' + base_url + 'Ajax/schools', {name: name}, function (data) {
 
     $('.data').html('<div></div>' + data);
        
    });
        
 
  



});

   
    
     $('body').on('click', '.pagination li a', function (e) {

      e.preventDefault();
         $ime = $(this).attr('href');


 $.get('api.php', {name: $ime}, function (data) {
  
     $('.data').html('<div></div><ul class="pagination">' + data + '</ul>');
        
$('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');
$('.gam3').addClass('klik');
  

});

});






 

$('.hover1').hover(function () {

$(this).find('.ret').addClass('hover2');

},
function () {
  $(this).find('.ret').removeClass('hover2');
 
});



$(".hover1").mousedown(function () {
$(this).find('.ret').addClass('active1');
    
});

$(".hover1").mouseup(function () {
  $(this).find('.ret').removeClass('active1');

});

$(".gam3").on ("click", function () {
    if (!name) {
  name = $('.ocupation-header').text();
    }
        $('.btn1 a').attr('href',''+ base_url +'schools/add');
   $.get('' + base_url + 'ajax/schools', {name: name}, function (data) {

     $('.data').html('<div></div>' + data);
     a=1;

             });

  });



$( ".gam5" ).on( "click", function () {
   if(!name){
  name = $('.ocupation-header').text();
    }
    
        $('.btn1 a').attr('href',''+ base_url +'videos/add');
     $.get('' + base_url + '/Ajax/videos', {name: name}, function (data) {

     $('.data').html('<div></div>' + data);
    a=2;
});

  });

$( ".gam6" ).on("click", function () {
   if (!name) {
  name = $('.ocupation-header').text();
    }
        $('.btn1 a').attr('href',''+ base_url +'mentors/add');
    $.get('' + base_url +'/Ajax/mentors', {name: name}, function (data) {

$('.data').html('<div></div>' + data);
   
a=3;
});

  });

$( ".gam7" ).on( "click", function () {
           if(!name){
  name = $('.ocupation-header').text();
    }  
    $.get('torent.php', {name: name}, function (data) {

    
a=4;
});
});

$('.next').click(function () {
$('.popup').removeClass('animated fadeInLeft');
$('.popup').fadeOut();
});


$('.gam3, .gam4, .gam5, .gam6, .gam7').mousedown(function () {
$('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');
$(this).addClass('klik');
});

$('.kocka1').on('click', function () {
$('.e').fadeOut('fast').hide();
});


$('.naslovnaikona').on('click', function () {
    $(this).addClass('klik'); 
});
$('body').on('mouseenter', '.display',  function() {
$(this).find('div').css('background', 'transparent');

});

$('body').on('mouseleave', '.display',  function() {
$(this).find('div').css('background', 'rgba(255,255,255, .1)');

});

});