var BARI0053 = {
    
    init: function(){

    var box = document.createElement("div");
    box.className = "box";
    box.textContent = "bari0053";
    document.getElementById("boxes").appendChild(box);

    box.addEventListener("mouseover", mouseover);
    box.addEventListener("mouseout", mouseout);
        
    },
    
    mouseover: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },

    mouseout: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    };