var BARI0053 = {

    init: function(){

    var box = document.createElement("div");
    box.className = "box";
    box.textContent = "bari0053";
    document.getElementById("boxes").appendChild(box);

    box.addEventListener("mouseover", BARI0053.mouse);
    box.addEventListener("mouseout", BARI0053.mouse);
    box.addEventListener("click", BARI0053.click) 
    },

    mouse: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    click: function(ev){
    ev.currentTarget.style.backgroundColor = "white";
    ev.currentTarget.style.borderColor = "white";
    },
    
    };