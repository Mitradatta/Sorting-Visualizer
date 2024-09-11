
  var num_bins,n,heights=[];
  var c=0.5;
  var timer1,timer2,timer3,timer4,timer5,timer6,timer7,timer8,timer9;
  var algo_check =false,algo_id=0;
      /* 
        - Code to execute when only the HTML document is loaded.
        - This doesn't wait for stylesheets, 
          images, and subframes to finish loading. 
      */

      window.onload =  (event) => {

         let screen_width = (window.innerWidth)/2;
         console.log(screen_width);
        
          num_bins = Math.floor(screen_width/30);
          console.log("total are",num_bins);
         //Creating bins with respect to screen-size
          create_bins();


      }
      window.onresize =  (event) => {
           
         clearing_Timers();
         let screen_width = (window.innerWidth)/2;
         console.log(screen_width);
        
          num_bins = Math.floor(screen_width/30);
          console.log("total are",num_bins);
         //Creating bins with respect to screen-size
          create_bins();


      }

function clearing_Timers()
{
    
     var id = window.setTimeout(function() {}, 0);

  while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
}
     
}

 function create_bins()
 {
    heights = [];
    c=0.5;
    let content = document.getElementById("content");
     content.innerHTML="";
   for(var i=0; i<num_bins; i++)
   {
      let k = document.createElement('div');
      k.className="a";
      content.appendChild(k);
   }
   n = document.getElementsByClassName("a");
   
   for(let i=0; i<num_bins; i++)
  {
    n[i].style.opacity=0.8;
   var k = parseInt(Math.random()*300) + 170;
   heights.push(k);
     n[i].style.height = k.toString()+ "px";
  }

//console.log(heights);
for(let i=0; i<heights.length; i++)
{
   n[i].innerHTML = heights[i];
   n[i].style.backgroundColor="blue";
}

 }



function change(j,i,color)
{
  
     timer1 = setTimeout( function() {
    n[j].style.backgroundColor = color;
    n[i].style.backgroundColor = color; },c*100);
    c+=0.001;

}


function change2(j,i,color)
{
 
    timer2  = setTimeout( function() {
      for(var k=j; k<=i; k++)
      {
      n[k].style.backgroundColor = color; } 
     },c*100);
    c+=1;

}

function updating(i,j)
{
    
   timer3 = setTimeout( function() {
    //console.log(heights);
    var temp = n[i].innerHTML;
     n[i].innerHTML = n[j].innerHTML; 
     n[j].innerHTML = temp;  },c*100);
   c+=1;
}

function updating2(l,r,s)
{
   
    var k=0; 
    timer4 = setTimeout(function() {
       for(var i=l; i<=r; i++)
        {
       n[i].innerHTML = s[k];
        k++;
        }
    },c*100);
    c+=1;
}

function algo_appear(id)
{
      if(algo_check)
      {
          let temp = "algo"+ algo_id.toString();
          let algo_1 = document.getElementById(temp);
          algo_1.className = "invisible";
      }
      let to_appear = "algo"+id.toString();
      let algo_2 = document.getElementById(to_appear);
      algo_2.className ="fading";
      algo_check = true;
      algo_id = id;
}

function hideinfo()
{
    let info = document.getElementById('maininfo');
    info.className="invisible";
}
function displayinfo()
{ 
    create_bins();
    let infomain = document.getElementById('maininfo');
    infomain.className="";
    let temp = "algo"+ algo_id.toString();
    let algo_1 = document.getElementById(temp);
    algo_1.className = "invisible";

}

function hello(x)
{
    clearing_Timers();
    create_bins();
    hideinfo();
    switch(x)
          {
            case 1:
                    algo_appear(1);
                    break;
            case 2: 
                    algo_appear(2);
                    break;
            case 3: 
                    algo_appear(3);
                     break;
            case 4: algo_appear(4);
                    break;
            case 5: algo_appear(5);
                    break;
          }
    
}
