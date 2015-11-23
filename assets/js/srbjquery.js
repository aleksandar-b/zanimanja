$(document).ready(function () {




    $('.popup').delay(500).show(0);
        base_url = 'http://localhost/820ocupations/';
    

    $('.e').scrollToFixed();
    name1 = $('.ocupation-header').text();

if (name = $('.ocupation-header').text()) {
  name = $('.ocupation-header').text();
    }else{

        name = $('.de').html();

         }
    $('.btn1 a').attr('href',''+    base_url +'schools/add');
    $.get('' + base_url +'Ajax/schools', {name: name}, function (data) {


    console.log(data);
        var d = data;
       var d = d.split(";");
        console.log(d);
         $('.data').html("");



if(d.length > 1){

         var counter = 1;
var i = setInterval(function(){
 $('.data').append('<div></div>' + d[counter]);

    counter++;

    if(counter === d.length) {
        clearInterval(i);
    }
}, 40*counter);

}else{
    $('.data').html('<div></div>' + data);
}
    });


   $( '.e' ).removeClass(' fadeInRightBig');





$('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');

        $('.gam3').addClass('klik');
        a = 0;


   $(".hover1").on("click", function () {

var clas = 'slideInRight';
var anim = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
     $('.broj').addClass(clas).one(anim, function () {
     $( this ).removeClass(clas);


});



       name = $(this).find('.de').html();
console.log(name);

      $broj = $(this).find('.ret').html();
       $('.broj').html('<p>' + name +'</p>' + $broj  + '<p>Pozitivnih odgovora </p>');
        $('.kocka33').html('<h4><a href="' + base_url + 'zanimanje/' + name + '">' + name + '</a></h4>');

        $('.gam3, .gam4, .gam5, .gam6, .gam7').removeClass('klik');
        $('.gam3').addClass('klik');

    $.get('' + base_url + 'Ajax/schools', {name: name}, function (data) {

       console.log(data);
        var d = data;
       var d = d.split(";");
        console.log(d);
         $('.data').html("");



if(d.length > 1){

         var counter = 1;
var i = setInterval(function(){
 $('.data').append('<div></div>' + d[counter]);

    counter++;

    if(counter === d.length ) {
        clearInterval(i);
    }
}, 40*counter);

}else{
    $('.data').html('<div></div>' + data);
}

    });






});



     $('body').on('click', '.pagination li a', function (e) {

      e.preventDefault();

      $ime = $(this).attr('href');

 $.get('api.php', {name: $ime}, function (data) {

     console.log(data);

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

    $arr = ['http://www.shyanselah.com/wp-content/uploads/world-technology-background.jpg', 'http://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300373/12927553-Dark-blue-technology-background-Stock-Photo-technical.jpg', 'https://hugomiramontes.files.wordpress.com/2012/12/1-point_black.png', 'http://images.freepicturesweb.com/img1/07/17/25.jpg', 'https://daybreakmagazine.files.wordpress.com/2010/05/ultimate_technology.jpg', 'http://images.wallpapersmela.com/2014/01/Latest-HD-Technology-Wallpapers-2014.jpg', 'http://st.depositphotos.com/1091305/2172/v/950/depositphotos_21724505-Color-Diagram-on-the-digital-technology-background.jpg'];
$broj = 0;

$(".hover1").mousedown(function () {

$(this).find('.ret').addClass('active1');
   $random = Math.floor((Math.random() * 6) + 1);
$('body').css("background-image", "url('"+$arr[$random]+"')");

   //$('body').css("background-image", "url('')");

    $g = 1/$random*360;

 $('body').css("background-color", "hsl("+$g+",50%,30%)");

 // $('body').css("background-color", "rgba(0,0,0,.9)");



});

$(".hover1").mouseup(function () {
  $(this).find('.ret').removeClass('active1');

});

$(".gam3").on ("click", function () {
 if ($('.ocupation-header').text()) {
  name = $('.ocupation-header').text();
    }

    $('.btn1 a').attr('href',''+ base_url +'schools/add');
   $.get('' + base_url + 'ajax/schools', {name: name}, function (data) {

       console.log(data);

     $('.data').html('<div></div>' + data);
     a=1;

             });

  });






$( ".gam5" ).on( "click", function () {
    if ($('.ocupation-header').text()) {
  name = $('.ocupation-header').text();
    }



        $('.btn1 a').attr('href',''+ base_url +'videos/add');
     $.get('' + base_url + '/Ajax/videos', {name: name}, function (data) {


        console.log(data);
        var d = data;
       var d = d.split(";");
        console.log(d);
         $('.data').html("");



if(d.length > 1){

         var counter = 1;
var i = setInterval(function(){
 $('.data').append('<div></div>' + d[counter]);

    counter++;

    if(counter === d.length ) {
        clearInterval(i);
    }
}, 40*counter);

}else{
    $('.data').html('<div></div>' + data);
}
    a=2;
});

  });







$( ".gam6" ).on("click", function () {
   if ( $('.ocupation-header').text()) {
  name = $('.ocupation-header').text();
    }


        $('.btn1 a').attr('href',''+ base_url +'mentors/add');
    $.get('' + base_url +'/Ajax/mentors', {name: name}, function (data) {
console.log(data);
$('.data').html('<div></div>' + data);

a=3;
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
});

