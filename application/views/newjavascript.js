/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload = function() {
  
  var broj = 0;

   var imgX, imgO;
  
  var urlY = "<img class='o' src='http://www.focusst.org/forum/attachments/focus-st-appearance/17599d1377183355-custom-scripture-turbo-decal-help-me-decide-red-x.png'/>";
  
  
 
    
   var urlX = '<img class="x" src ="http://www.iconhot.com/icon/png/devine/256/circle.png" />';
  
  imgX = urlX;
   imgO = urlY;
  var xOrO = function (){
    var ui = 1;
      var ik = [];

   urlX = "<img class='x' src= 'http://www.focusst.org/forum/attachments/focus-st-appearance/17599d1377183355-custom-scripture-turbo-decal-help-me-decide-red-x.png' />";
    
    urlY = "<img class='o' src='http://www.iconhot.com/icon/png/devine/256/circle.png' />";
    

  if( broj%2 === 0){
    
    $('.check-box').val('off'); 
  ui = 2;
  }else{
    ui = 1;
     
      $('.check-box').val('on');
    }
  
  if(ui === 2){
   
    $('.mesto').html("<img  src='http://www.focusst.org/forum/attachments/focus-st-appearance/17599d1377183355-custom-scripture-turbo-decal-help-me-decide-red-x.png'/>");
    
    $('h2').html("Choose O");
    urlY = "<img class='o' src='http://www.focusst.org/forum/attachments/focus-st-appearance/17599d1377183355-custom-scripture-turbo-decal-help-me-decide-red-x.png'/>";
    
    urlX = '<img class="x" src ="http://www.iconhot.com/icon/png/devine/256/circle.png" />';
  }else if(ui === 1){
    $('h2').html("Choose X");
    $('.mesto').html("<img  src='http://www.iconhot.com/icon/png/devine/256/circle.png' />");
    urlX = "<img class='x' src= 'http://www.focusst.org/forum/attachments/focus-st-appearance/17599d1377183355-custom-scripture-turbo-decal-help-me-decide-red-x.png' />";
    
    urlY = "<img class='o' src='http://www.iconhot.com/icon/png/devine/256/circle.png' />";
    
  }
  

  ik.push(urlX);
  ik.push(urlY);



    return ik;
   }
  
  
  var comp = 0;

   $('.check-box').on('click', function(){
   comp = 0;
       $('.x').empty();
     broj++;
      
        imgX = xOrO()[0];
      
 
       imgO = xOrO()[1];
   
     
   });
     
 //alert(xOrO());
   
  
  
    
 
  $('.btn').on
('click', function(){
    
    $('.x').empty();
comp = 0;
    
  })





  var remainWin = [];
var broj = 0;
 var boxes = [];
var winningComb = [
  ['a1','a2','a3'],
  ['a1', 'a5', 'a9'],
  ['a1', 'a4', 'a7'],
  ['a2', 'a5', 'a8'],
  ['a3', 'a6', 'a9'],
  ['a4', 'a5', 'a6'],
  ['a7', 'a8', 'a9'],
  ['a3', 'a5', 'a7']
]

var aw = document.getElementsByClassName('x');



  var asd = document.querySelectorAll('.x');

  //Function Search
    var myObj = {};
  function searchAndDestroyComp (val) {
    var someArr = [];

    var xArr = [];

    var oArr = [];
    //# IMG === X OR O

//SCAN FOR IMG CLASSES (FIRST VERSION) ON JQUERY OBJ AND PUT RESULTS IN OBJECT MYOBJ


    //SCAN FOR IMG CLASSES (SECOND VERSION)  AND PUT RESULTS IN ARRAYS OARR AND XARR


   var aw = document.getElementsByClassName('x');
    var classA1 = aw[0].classList[1];
    //if statement for childrenImgClass in case of undefined
    var childrenImgClass = aw[0].childNodes[0].className;

    for(var i = 0; i < aw.length; i++){
      var j = document.getElementsByClassName(aw[i].classList[1]);

      if(j.length > 0){
        if(j[0].childElementCount > 0){
          if(j[0].children[0].className === 'o'){
            oArr.push(aw[i].classList[1]);
          }else{
            xArr.push(aw[i].classList[1]);
          }

      console.log('JA: '+j[0].children[0].className +' on: '+ aw[i].classList[1]);

        }
      }

      /* if(j.childNodes[0] !== undefined){
         console.log('fd: '+j.childNodes[0].className);
      } */
    }
//INSIDE FUNCTION
     function oArriterate() {

      for(var outer = 0; outer < winningComb.length; outer++){
          var count = 0;

       for(var j = 0; j < oArr.length; j++){

         if(winningComb[outer].indexOf(oArr[j]) !== -1){

            count++;
           //REMAINING AT TWO
   if(count === 2 ){

     var correct = 0;
     xArr.forEach(function (value) {
      if(winningComb[outer].indexOf(value) !==-1){
      correct = 1;
        return false;
      }});

      if(correct === 0){
        //WINNING COMBINATION

      }else{
        //CONFLICT



        //FIND IF OTHER PLAYER HAS TWO FIELDS FILLED
        var twoFields = [];
        winningComb.forEach(function(arr, index) {
          var flag = 0;
        xArr.forEach(function(val){
        // winningComb[outer].indexOf(val)!== 0

          if(arr.indexOf(val) !== -1){
            flag++;
            if(flag === 2){
              twoFields.push(arr);
             // alert('DANGER: '+arr);

            }}
        });

        });
        console.log('twoFields: '+twoFields);

      }

   }
            if(count > 2){
              alert("YOU WIN - it's a mistake. Let me know");

          }}}
        count = 0;
       }}

        // END OF A FUNCTION oArriterate

    oArriterate();
  }




  //Function find TwoFields and return that remaining field
     var twoFields = function(oArr){
        var cat = [];
        var oa = oArr();
       if(oa === false){
         return false;
       }
     winningComb.forEach(function(arr, index) {
          var flag = 0;
        oa.forEach(function(val){

          if(arr.indexOf(val) !== -1){
            flag++;
            if(flag === 2){
             // twoFields.push(arr);
             // alert('DANGERWIN: '+arr);
              var g =[];

              //total shit

                 var gg = arr.forEach(function (hj) {
                  // alert(hj+" on: "+ oa.indexOf(hj));
                if (oa.indexOf(hj) === -1)
                {
                  var imag = $('#'+hj).find('img');
                 if(imag.length === 0){
                       cat.push(hj);
                 }

                }
                });

}else{
  return false;

}} }); });
if(cat.length > 0){
        return cat;
}else{
  return false;
}


     };

  //END twoFields function



  // ADD EVENT LISTENER(CLICK) FOR EACH ELEMENT

  for(var i = 0; i<aw.length; i++){

    var listener  = function () {

      
      //prevent duplicate clicks
if(this.childElementCount > 0){return;}
      
      //increment clicks
comp++;

      //append img to clicked element
    var clickedElem = this.className.split(" ")[1] || this.className;
  this.innerHTML = imgO;
      
    myObj = {};
      
      
      //find all img elements and their classes of parent an their own
    var r = $('.x').find('img');

          console.log('length: '+r.length);
    for(var u = 0; u<r.length; u++){
      myObj[r[u].parentNode.classList[1]] = r[u].className;

    }


    for(var t = 0; t < winningComb.length; t++){
      for(var u = 0; u < winningComb[t].length; u++){

       

        if(winningComb[t][u].indexOf(clickedElem) !== -1){
          
          remainWin.push(winningComb[t]);
          var m = winningComb[t].filter(function(value){

            return value.indexOf(clickedElem) === -1;

          });

           boxes.push(m);

        }}}

//COMP'S TURN!

    // PREREQUISITE'S:

    // SCAN FUNCTION
    // - FUNCTION TO CHECK FOR TWO ENEMIES FIELDS

    //SCAN X
//scan X fields
     var scanX = function (){
        var xObj = {};
        oX = [];

      var r = $('.x').find('img');
      for(var u = 0; u<r.length; u++){

        if(r[u].className === 'x'){

          oX.push(r[u].parentNode.classList[1]);
        }
         xObj[r[u].parentNode.classList[1]] = r[u].className;
          }
        if(oX.length !== 0){
           return oX;
                 }else{
                   return false;
                 }};


    //SCAN O
      //scan o fields
      var scanO = function (){
        var xoObj = {};
        oA = [];

      var r = $('.x').find('img');
      for(var u = 0; u<r.length; u++){

        if(r[u].className === 'o'){

          oA.push(r[u].parentNode.classList[1]);
        }
       xoObj[r[u].parentNode.classList[1]] = r[u].className;
          }
        if(oA.length !== 0){
           return oA;
                 }else{
                   return false;
                 }};


      //TWO FIELDS



//////////
    var inner = imgX;


      //#                                      #//
      //# MINI CONTROLLER - ONCLICK CONTROLLER #//
      //#                                      #//

//1.Check for win ie. for two our fields, if true alert win and return;
//2.check for two enemies fields, if true return
//3.if first our move append to middle, if not middle then a1, then return;
//4.second move and beyond- rules: (second turn)?one()first index ?   first index comon()-find common enemy field return; ? (comon().length>0)? first index comon() return; : (one().length>0)?one()second index return;
//5. Random element      


      //CHECK FOR WIN(TWO FIELDS) - IF TRUE BREAK
       if(twoFields(scanX)) {
        
    document.getElementsByClassName(twoFields(scanX)[0])[0].innerHTML = inner;
comp = 0;
  
         
         var myXArre = [];
         var myo = {};
        var myL = $('.x').find('img');
         console.log(myL);

          for(var h = 0; h<myL.length; h++){
      myo[myL[h].parentNode.classList[1]] = myL[h].className;
    }
        
          winningComb.forEach(function(rt){
           var ff = 0;
          
          return rt.forEach(function(rew){
            var ras = document.getElementsByClassName(rew)[0].childElementCount;
            
            if(ras>0){
             var lk = document.getElementsByClassName(rew)[0].children[0].className;
             if( lk !== false && lk === 'x'){
               ff++;
               
               if(ff === 3){
                 rt.forEach(function(das){
                   document.getElementsByClassName(das)[0].style.background = 'white';
                 });
                 
               }
             }
          }
           });
           
         });
    console.log(myo);
         
         
         function reset
(){
    var vad = document.getElementsByClassName('x');

         for(var f = 0; f<vad.length; f++){

           vad[f].innerHTML= '';
           vad[f].style.background = 'rgba(23,240, 34, 0.6)';
         }
}
         alert('Comp Win!');
         setTimeout(reset, 250);
         
       return;

  }

      // CHECK IF ENEMY HAS TWO FIELDS - IF TRUE BREAK
      if(twoFields(scanO)) {
        console.log(twoFields(scanO));
        document.getElementsByClassName(twoFields(scanO)[0])[0].innerHTML = inner;

                           return;
                           };


      // FIRST MOVE
      if(!scanX()){
        if(document.getElementsByClassName('a5')[0].childElementCount === 0){
          document.getElementsByClassName('a5')[0].innerHTML = inner;
          return;
        }else{
        document.getElementsByClassName('a1')[0].innerHTML = inner;
          return;
        }
      }

      // CASE: 1+ X FIELD
      // function that finds common



    var myXarr = [];
var myOarr = [];
      console.log(myObj);
    for(var prop in myObj){

      if( myObj.hasOwnProperty( prop )  ) {
        var great = document.getElementsByClassName(prop)[0].children[0].className;

         if(great === 'x'){

       myXarr.push(prop);

     }else{
       myOarr.push(prop);
     } }
    }

function common() {
 
  var commona = [];
  var final = [];
winningComb.forEach(function (vad) {
  myOarr.forEach(function(broj){
if (vad.indexOf(broj) !== -1) {
commona.push(vad);

}
  });
});
   commona.forEach(function(barv){

   final = final.concat(barv);

 });

 final = final.filter(function(ht,index){
    return final.indexOf(ht) !== index;
 });


console.log( final);
console.log( Object.keys(myObj)  );

var yy = final.filter(function(bv){

   return Object.keys(myObj).indexOf(bv) === -1;
 });

return yy;
}


     var one =  function() {
        var bt = [];

winningComb.forEach(function(tr) {

   myXarr.forEach(function(bn){

       if( tr.indexOf(bn) !== -1){

           bt.push(tr);
                };
       });
 });

       var dontknow = [];


      bt.forEach(function(ds){
        var e = 0;
        oA.forEach(function(b){
          if(ds.indexOf(b) === -1){
            e++;
           if(e === oA.length){
             dontknow.push(ds);
           }
          }

        });

      });
     
      return dontknow;

     };


      //APPEND PICTURE

if(comp === 2){
  var tg = one()[0].filter(function(ve){


   return document.getElementsByClassName(ve)[0].childElementCount === 0;

  });


    var ht;
    if(document.getElementsByClassName(tg[0])[0]){
      
  ht = document.getElementsByClassName(tg[0])[0];
      
      if(tg[0] === 'a1' && document.getElementsByClassName('a6')[0].childElementCount > 0 ){
        
         ht = document.getElementsByClassName(tg[0])[0];
      }
      
      if(tg[0] === 'a1' && document.getElementsByClassName('a3')[0].childElementCount > 0  ){
        
        tg = one()[1].filter(function(ve){


   return document.getElementsByClassName(ve)[0].childElementCount === 0;

  });
        ht = document.getElementsByClassName(tg[0])[0];
        
      }
      if(document.getElementsByClassName('a9')[0].childElementCount > 0){
        
         tg = one()[1].filter(function(ve){


   return document.getElementsByClassName(ve)[0].childElementCount === 0;

  });
        ht = document.getElementsByClassName(tg[1])[0];
        
        
      }
      
  }else {
    
  ht =  document.getElementsByClassName(tg[0])[0];
  }



    ht.innerHTML = inner;  return;
}

      if(common().length > 0){


      document.getElementsByClassName(common()[0])[0].innerHTML = inner;
      return;

      }

      if(one().length > 0){

      var tg = one()[0].filter(function(ve){


       return document.getElementsByClassName(ve)[0].childElementCount === 0;

      });


        var ht;
        if(document.getElementsByClassName(tg[1])[0]){
      ht = document.getElementsByClassName(tg[1])[0];
    }else {
    ht =  document.getElementsByClassName(tg[0])[0];
    }



        ht.innerHTML = inner;

        return;
      }



//RANDOM
var yu = [];
var r = $('.x');
for(var u = 0; u<r.length; u++){

  if(r[u].childElementCount === 0){

    yu.push(r[u].className);
  }

    }

    document.getElementsByClassName(yu[0])[0].innerHTML = inner;


   remainWin = [];
  if(comp === 5){
    alert('Draw!');
    comp = 0;
    $('.x').empty();
  }
    searchAndDestroyComp();

};

  aw[i].addEventListener('click', listener, false);


  }};
