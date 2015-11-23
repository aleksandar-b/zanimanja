window.onload = function () {
  
var children = document.querySelector('.square').children;
var clickable = false;
    
var randomOnLoad = Math.floor((Math.random() * 4) + 1);
  
  
var tm = 1;
  var arrNumbers = [];
  var arrRandom = [randomOnLoad];
  var soundUrl = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
  
  var count = 0;
    
    var broj = 1;
    var jednako = 0;
    var dh;
    var strict = document.querySelector('.reset');
    strict.addEventListener('click', function(){
    if(broj%2 === 0){
        this.style.background = "#3a3a50";
        this.children[0].style.color = "white";
        jednako = 0;
        this.style.boxShadow = dh;
    }else{
        jednako = 1;
        dh = this.style.boxShadow;
        this.children[0].style.color = "#01f218";
        this.style.boxShadow = "inset -1px -2px 16px 2px rgba(0,0,0,0.63)"
    
    }
    broj++;
    }, false);
    var kaunt = 0;
      //Timeouts on click
    var timeout = function () {
            var br = 1;
      clickable = false;
         
        arrRandom.forEach(function (elem) {
          var klas;
           
          if(elem === 1){klas=".single1";}
          if(elem === 2){klas=".single2";}
          if(elem === 3){klas=".single3";}
          if(elem === 4){klas=".single4";}
            
         //Timeout for sound 1000ms
      window.setTimeout(function(){
            var bh = document.querySelector(klas).style.background;
     document.querySelector(klas).children[0].play();
          
     
        
      document.querySelector(klas).style.opacity = '1';
        
          //COUNT FOR CLICKABLE. IF NOT EQUAL ARRRANDOM.LENGTH CLICKABE IS FALSE I.E COMP HAS NOT FINISHED CLICKING
          kaunt++;
          //inside timeout
          //Timeout background toggle 200ms
          window.setTimeout(function() {
          document.querySelector(klas).style.opacity = '0.6';
              if(kaunt === arrRandom.length){
            clickable = true;
            kaunt = 0;
        }
          }, 250/tm)
          
        }, 1000*br/tm);
      br++;
        
         }); 
        
        if(kaunt === arrRandom.length){
            clickable = true;
            kaunt = 0;
        }
        br = 0;   
        count = 0;
        
    }
    
    var cache1 = 0;
    
    
  var listener = function () {
         this.children[0].pause();
    this.children[0].currentTime = 0;
    
     this.children[0].play();
    
    var randomOnClick = Math.floor((Math.random() * 4) + 1);
    var mainCount = 0;
     if(!clickable){return;}
    count++;
      
      var watch = document.querySelector('.center').innerHTML;
    console.log('watch: '+watch);
     watch = Number(watch);
      if(count < 5 ){
      tm = 1;
      }
    if(count === 5 && watch <5){

      
      var levelUp = document.querySelector('.centar1');
         levelUp.innerHTML = "<h3 class='centar1'>Level Up!</h3>";
        
        
        
        window.setTimeout(function(){

            levelUp.innerHTML = "";
           
        },2000);
      document.body.style.backgroundColor = "transparent";
       
document.body.style.backgroundImage = "url('http://lmelinux.net/wp-content/uploads/sites/2/2014/11/Elementary_OS_Wallpapers_Ubuntronics_15.png')";      
      document.querySelector('.gta').innerHTML = '<p>Speed: 1.25 </p>';
    tm = 1.20;
    }
      if(count === 9 && watch < 9){

         var levelUp1 = document.querySelector('.centar1');
         levelUp1.innerHTML = "<h3 class='centar1'>Level Up!</h3>";
          
            window.setTimeout(function(){

            levelUp1.innerHTML = "";
           
        },2000);

          
          
              document.body.style.backgroundImage = "url('http://7-themes.com/data_images/out/49/6937989-autumn-nature-leaves-blur.jpg')";
      
      document.body.style.backgroundColor = "hsl(30,50%,30%)";
          document.querySelector('.gta').innerHTML = '<p>Speed: 1.35 </p>';
    tm = 1.35;
    }
    if(count === 13 && watch < 13){
      
        
         var levelUp2 = document.querySelector('.centar1');
         levelUp2.innerHTML = "<h3 class='centar1'>Level Up!</h3>";
          
        
        
      window.setTimeout(function(){

            levelUp2.innerHTML = "";
           
        },2000);
      document.body.style.backgroundColor = "transparent";    
        
        
      document.body.style.backgroundImage = "url('http://www.vonsavannah.com/wp-content/uploads/2015/05/blurry-nature-background-hd.jpeg')";
      
      document.body.style.backgroundColor = "hsl(350,50%,30%)";
        document.querySelector('.gta').innerHTML = '<p>Speed: 1.50 </p>';
    tm = 1.50;
    }  
      
    var clickedClassbyNumber;
      
      if(this.className === 'single1'){clickedClassbyNumber = 1}
      if(this.className === 'single2'){clickedClassbyNumber = 2}     
      if(this.className === 'single3'){clickedClassbyNumber = 3}
      if(this.className === 'single4'){clickedClassbyNumber = 4}
      
   this.children[0].play();
      
     //TImeOut former
   
      console.log('count: '+count);
    
      ///MAIN LOGIC
      
      
      if(arrRandom[count-1] === clickedClassbyNumber){ // Right click
          
          //Success
          console.log('length: '+arrRandom.length);
 
          if(count === arrRandom.length){
              cache1 = count;
              arrRandom.push(randomOnClick);
              if(count === 20){
                  
                  document.querySelector('.center').innerHTML = '20';
               
         var levelUp3 = document.querySelector('.centar1');
         levelUp3.innerHTML = "<h3 class='centar1'>You Win!</h3>";
          
        
        
      window.setTimeout(function(){

          
           document.querySelector('.center').innerHTML = '0';
          timeout();
            levelUp3.innerHTML = "";
           timeout();
           
        },2000);
      document.body.style.backgroundColor = "transparent";    
        
        
      document.body.style.backgroundImage = "url('http://www.vonsavannah.com/wp-content/uploads/2015/05/blurry-nature-background-hd.jpeg')";
      
      document.body.style.backgroundColor = "hsl(350,50%,30%)";
              
              }
              
              var yt = tm;
              
              if(count === 5 || count === 9 || count === 13){
              yt = 0.1;
              
              }else{
                  yt = tm;
              }
             window.setTimeout(function() {
                          
                         timeout(); 
                      }, 300/yt);
            
               document.querySelector('.center').innerHTML = cache1;
              count=0;
            
          }else{  //Delete this after
              
             // count++;
            
              
              
              console.log('random in all except last: '+arrRandom);
              console.log('count: '+count);
          }
 
              }else{           //MISTAKEN CLICK

                  
                  if(jednako === 1){
                       var k = 1;
                 var yu = setInterval(function(){
                    
                      if(k ===1 ){
                      document.querySelector('.center').innerHTML = "!!";
                      }
                      if(k === 2){
                      document.querySelector('.center').innerHTML = "";
                      }
                      
                       if(k === 3){
                          document.querySelector('.center').innerHTML = 0;
                      clearInterval(yu);
                      }
                  k++;
                  }, 200/tm);
                      count = 0;

                   randomOnLoad = Math.floor((Math.random() * 4) + 1);
                   arrRandom = [randomOnLoad];
                      window.setTimeout(function() {
                          
                         timeout(); 
                      }, 400/tm);
                   
                   
                  }else{
                  
                  document.querySelector('.center').innerHTML = "!!";
              var u = 1;
                 var tu = setInterval(function(){
                    
                      if(u ===1 ){
                      document.querySelector('.center').innerHTML = "!!";
                      }
                      if(u === 2){
                      document.querySelector('.center').innerHTML = "";
                      }
                     if(u === 3){
                      document.querySelector('.center').innerHTML = cache1;
                     }
                      
                      if(u === 4){
                      clearInterval(tu);
                      }
                  u++
                  }, 200/tm);
              
            //    alert(cache1);
                       window.setTimeout(function() {
                          
                         timeout(); 
                      }, 400/tm);
                  console.log('random in mistake: '+arrRandom);

                      
              } 
             
              }

    //timeout();  
   
      
      
    };
  
  for(var i = 0; i<children.length; i++){
if(i !== 2){
  
 var bcg = children[i].style.background
    children[i].addEventListener('click', listener, false); 
    
    children[i].addEventListener('mousedown', function(){
      
      this.style.background = 'black';
      
    }
    , false);
  
    children[i].addEventListener('mouseup', function(){
      
      this.style.background = bcg;
      
    }
    , false);
  
  }
  }
   var start = document.querySelector('.start');
    
    start.addEventListener('click', function(){
        clickable =  true;
                          document.querySelector('.center').innerHTML = "";
              var kl = 1;
                 var nm = setInterval(function(){
                    
                      if(kl ===1 ){
                      document.querySelector('.center').innerHTML = "--";
                      }
                      if(kl === 2){
                      document.querySelector('.center').innerHTML = "";
                      }
                   
                      if(kl === 3){
                          document.querySelector('.center').innerHTML = 0;
                      clearInterval(nm);
                      }
                  kl++
                  }, 200/tm);
        
        count = 0;
       // document.querySelector('.center').innerHTML = 0;
        document.querySelector('.start').innerHTML = "<p>Reset</p>";
        randomOnLoad = Math.floor((Math.random() * 4) + 1);
        arrRandom = [randomOnLoad];
    timeout();
     
       
    }, false);
    
 $arr = ['https://i.imgur.com/vWaRg9Z.jpg', 'https://i.imgur.com/gxyleSM.jpg', 'https://i.imgur.com/EquvQMN.jpg', 'https://i.imgur.com/u9TJgol.jpg', 'https://i.imgur.com/wFLd83m.jpg', 'https://i.imgur.com/yIOiJ0f.jpg'];
$broj = 0;

$(".ka > div > img").click(function () {
    

   $random = Math.floor((Math.random() * 5) + 1);

  $('body').css("background-image", "url('"+$arr[$random]+"')");
  
   
    
    $g = 1/$random*360;
   
 $('body').css("background-color", "hsl("+$g+",50%,30%)");
  
  });
  
  
  var tu = document.querySelector('.display');
setTimeout(function(){
  tu.style.background = "black";
  
}, 3800);

}