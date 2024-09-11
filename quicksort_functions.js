function close5(heights)
{

   timer7 = setTimeout(function() {
    console.log(heights);
    for(let k=0; k<heights.length; k++)
    {
         n[k].style.height = heights[k].toString() + "px";
    }
    
  },c*100);
}


function quicksort()
{

   quicksorts(0,heights.length - 1,heights);
   console.log(heights);
}

function quicksorts(l,h,heights)
{
      if(l<h)
      {
       let m = partition(l,h,heights);
       quicksorts(l,m-1,heights);
       quicksorts(m+1,h,heights);
     }

}

function partition(l,h,heights)
{
     let i = l+1;
     let j = h; 
     let pivot = l;
     let s = [];
     for(let k=l+1; k<=h; k++)
     {
          if(heights[k]<heights[pivot])
          {
                  let temp = heights[i];
                  heights[i] = heights[k];
                  heights[k] = temp;
                  i++;
          }
     }

     let temp = heights[l];
     heights[l] = heights[i-1];
     heights[i-1] = temp; 
      for(let x=0; x<heights.length; x++)
       {
            s.push(heights[x]);

       }
 
     change(i-1,i-1,"red");
     close5(s);
     change(i-1,i-1,"pink");

     return i - 1 ;
}