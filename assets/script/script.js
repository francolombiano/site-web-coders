let donnees =document.querySelectorAll(".donnees");

donnees.forEach(function(element){

             element.addEventListener("mouseover", function() {
          
            /*element.style.background = "transparent";*/
            
            element.classList.add("change");
            console.log(element);
        });
           
            element.addEventListener("mouseout", function() {
                /*element.style.background = "";*/
                
            
            element.classList.remove("change");

            console.log(element);

        });
    });