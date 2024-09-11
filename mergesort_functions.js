function close4(i,j,s)
{
   
       timer6 = setTimeout(
          function() {
            console.log(i,j,s);
             var k=0; 
             for(var x=i; x<=j; x++)
             {

                    n[x].style.height = s[k].toString() + "px";
                    k++; 
             }
           }
       
         ,c*100);
           c+=1;
                 // 
}

function mergesort()
{
     
      merges(0,heights.length-1,heights);   
      console.log(heights);

}

function merges(l,r,a)
{
  if(l<r)
  {
       let m = Math.floor((l+r)/ 2);
       merges(l,m,heights);
       merges(m+1,r,heights);
       merging(l,m,r,heights);
  }
}


function merging(l,m,r,heights)
{
    let i = l;
    let j = m+1;
    let z = r;
    let  s = []
    while( i<=m && j<=r)
    {
         if(heights[i]<heights[j])
         {
              s.push(heights[i]);
              i++;
         }
         else {
             s.push(heights[j]);
             j++;
         }
    }

    while(i<=m)
    {
         s.push(heights[i])
         i++;
    }

    while(j<=r)
    {
        s.push(heights[j])
        j++;
    }

    var x=0;
    for(var k=l; k<=r; k++)
    {
          heights[k] = s[x];
          x++;
    }
    change2(l,r,"red");
    close4(l,r,s);
    updating2(l,r,s);
    change2(l,r,"pink");
}
