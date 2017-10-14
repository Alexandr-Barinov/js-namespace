var BARI0053 = {
    
    init: function(){

    var box = document.createElement("div");
    box.className("box");
    box.textContent = "bari0053";
    document.getElementById("boxes").appendChild("box");

    div.addEventListener("mouseover", mouseover);
    div.addEventListener("mouseout", mouseout);

    function mouseover(ev){
    ev.currentTarget.toggle("highlight");
    };

    function mouseout(ev){
    ev.currentTarget.toggle("highlight");
    };

        
    }
    
};