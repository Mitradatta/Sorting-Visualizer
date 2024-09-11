function close(j)
{
      
     var k;
         timer5 = setTimeout(
          function() {
               
                  k = n[j].style.height ;
                 n[j].style.height = n[j+1].style.height;
                 n[j+1].style.height = k;
                
                   
         },c*100);
         c+=0.0001;

                  var x = heights[j] ;
                heights[j]  = heights[j+1] ;
                 heights[j+1] = x;

                // console.log(k);
                
}

function bubble()
{


for(let i=0; i<n.length; i++)
{
  let x = i; 
   // detailedcreate(heights,i+1);
  for(let j=0; j<n.length-1; j++)
  {
       if(heights[j]>heights[j+1])
       {
           change(j,j+1,"red");
           close(j);
           updating(j,j+1);
           // detailed(heights,i+1);
           change(j,j+1,"blue");
           x = j+1;
       }
  }
  change(n.length-i-1,n.length-i-1,"pink");
}
}