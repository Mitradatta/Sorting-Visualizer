
function close2(i,j)
{
      
       timer8 =   setTimeout(
          function() {
               
                 var k = n[j].style.height ;
                 n[j].style.height = n[i].style.height;
                 n[i].style.height = k;
                
                   
        },c*100);
         c+=1;

                  var x = heights[j] ;
                heights[j]  = heights[i] ;
                 heights[i] = x;

                 // console.log(k);
                
          

}
function selection()
{


for(let i=0; i<n.length; i++)
{
   let min = heights[i];
   let k = i; 
  for(let j=i; j<n.length; j++)
  {
       if(heights[j]<min)
       {
           k = j;
           min = heights[j];

       }
  }
  change(i,k,"red");
  close2(i,k);
  change(k,k,"blue");
  updating(i,k);

  change(i,i,"pink");
}

}