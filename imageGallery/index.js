
// getters
let fullImageGallery=document.getElementById('fullImageGallery');

let img1= document.getElementById('img1');

let imagGallery = document.querySelectorAll('.img');

let  image = document.getElementById('img');

let cancel = document.getElementById('cancel');

let btnNext =document.getElementById('next');

let btnBack =  document.getElementById('back');

let elementBacklast =null;

let elementNextLast =null;

let arr= Array.from(imagGallery);   //here we create an arry from the node list

console.log(imagGallery);

let nextvariable = 0;

let j=0;

let backVariable=0;

let elementToselePic;


imagGallery.forEach(element => {

//   procedure start for the display of the single image in large size with overlay effect
     element.addEventListener('click',function()
     {
       
        // for displaying overlay
         fullImageGallery.style.display='flex';
         image.classList.remove('Onhover');
        //  for getting the target image src
         image.src= element.src;  
         elementToselePic=element;
         j++;
        //  for displaying next and back images
         backVariable=0;
         nextvariable = 0;
         elementNextLast=null;
         elementBacklast=null;
     
     })

     //cancel button

     cancel.addEventListener('click',function()
     {
         fullImageGallery.style.display='none';
     })

    
     
});

btnBack.addEventListener('click',function()
{
    // for the back button

    if( elementNextLast === null ||  elementNextLast ===  undefined)  
    {
 
        for(let i=0; i<imagGallery.length;  i++)
        {
            
            if(arr[i].src === elementToselePic.src)
            {
                backVariable++;
                
                nextvariable=0;

                    if(i-backVariable   >= 0 &&  (i-backVariable) <= 7  )
                    { 

                    fullImageGallery.style.display='flex';
            
                    image.src = arr[i-backVariable].src;

                    elementBacklast= arr[i-backVariable].src;
                    
                    }
                    else
                    {
                        alert(`You are already at the very first image.
                        `);
                        
                        elementBacklast = arr[0].src;
                    }
                
            }
            
            
        }
    
    }

    else
    {
            for(let i=0; i<imagGallery.length;  i++)
            {
                
             
                
                if( arr[i].src === elementNextLast )
                {

                  

                    backVariable++;

                    nextvariable=0;
                    
                   
                  
                        if( i-backVariable   >= 0 &&  (i-backVariable) <= 7 )
                        { 
        
                                fullImageGallery.style.display='flex';
                        
                                image.src = arr[i-backVariable].src;
                
                                elementBacklast= arr[i-backVariable].src;
                
        
                        }
                        else
                        {
                            alert(`You are already at the very first image.
                            `);
                            
                            elementBacklast = arr[0].src;
                            
                        }
                    
                }
            }
        }

})

//for the next button

btnNext.addEventListener('click',function()
{
        if(elementBacklast === null || elementBacklast === undefined )
        {
            for(let i=0; i<imagGallery.length;  i++)
            {

                    if(arr[i].src === elementToselePic.src )
                    {
                        nextvariable++;
                        
                        backVariable=0;
                        
                         if( (i + nextvariable) <= 7)
                        { 
                            console.log(' nextvariable = ' +  nextvariable);

                            fullImageGallery.style.display='flex';
                    
                            image.src = arr[i + nextvariable].src;

                            elementNextLast = arr[i+nextvariable].src;

                            console.log(elementNextLast.src);

                            }
                            else
                            {
                                console.log(' nextvariable = ' +  nextvariable);

                                alert(`You are already at the last image.`);

                                nextvariable=7; 

                                elementNextLast= arr[7].src;

                               
                            }
                        

                    
                    }
            }

        }   
           
        else
        {
            for(let i=0; i < imagGallery.length;  i++)
            {
                   
                    if(arr[i].src === elementBacklast)
                    {
                        nextvariable++;

                        backVariable=0;
                        
                        
                        if(( i+nextvariable) <= 7)
                        { 

                            fullImageGallery.style.display='flex';
                    
                            image.src = arr[i + nextvariable].src;

                            elementNextLast = arr[i+nextvariable].src;

                          
                        }
                            else
                            {
                                alert(`You are already at the last image.
                                    `);

                                nextvariable=7; 

                                elementNextLast = arr[7].src;

                                
                            }
                
                    }
            }

        }      
    

})


