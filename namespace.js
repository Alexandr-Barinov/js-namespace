var BARI0053 = {
    
    init: function(){

    var box = document.createElement("div");
    box.classList.add("box");
    box.textContent = "bari0053";

    div.addEventListener("mouseover", mouseover);
    div.addEventListener("mouseout", mouseout);
        
    document.getElementById("boxes").appendChild(box);

    },
    
    mouseover: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },

    mouseout: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    };