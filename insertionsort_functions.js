function close3(i,j)
{

  
   timer9 = setTimeout( function() {
          // console.log(i,j+1);
           let  k = i-1; 
           let  min1 = n[i].style.height;
           let min2 = n[i].innerHTML; 
          
           while(k>=j)
           { 
               
                
                n[k+1].style.height = n[k].style.height;
                n[k+1].innerHTML = n[k].innerHTML;
             //  n[k+1].innerHTML =   parseInt(n[k+1].style.height); 
             // n[k+1].style.width = "20px";
                k--;
           }    
           console.log(k+1,j);
        
           n[k+1].style.height = min1;
           n[k+1].innerHTML = min2; 
           
           
        
            // n[k+1].innerHTML =   parseInt(n[k+1].style.height); 
            // n[k+1].style.width = "20px";
       
             // console.log(j,n[j].style.height,j+1,n[j+1].style.height);
      
         },c*100);
         c+=1;
                 // console.log(k);
                
}

function insertion()
{


for(let i=1; i<n.length; i++)
{
   let min = heights[i];
   let j = i-1; 
  // console.log(j,min);
  //detailedcreate();
   while(j>=0 && heights[j]>min) 
   {
         
          heights[j+1] = heights[j];
          
            j--;      
           
    }
   heights[j+1]= min;
   console.log(heights);
    change(i,j+1,"red");
   close3(i,j+1);

    change(i,j+1,"pink");
 
}
}