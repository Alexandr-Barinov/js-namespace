var BARI0053 = {
    
    init: function(){

    var box = document.createElement("div");
    box.classList.add("box");
    box.textContent = "bari0053";
    document.getElementById("boxes").appendChild(box);

    div.addEventListener("mouseover", mouseover);
    div.addEventListener("mouseout", mouseout);
    },
    
    mouseover: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },

    mouseout: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    };